"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Crutpage from "../crutpage/page"

function SkillsAdmin() {

  const [skills, setSkills] = useState<any[]>([])

  const [name, setName] = useState("")
  const [icon, setIcon] = useState<File | null>(null)
  const [percentage, setPercentage] = useState("")
  const [order, setOrder] = useState("")
  const [loading, setLoading] = useState(false)

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("access")
      : null

  const fetchSkills = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/skills/`
    )
    setSkills(res.data?.results || res.data)
  }

  useEffect(() => {
    fetchSkills()
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!token) {
      toast.error("Login qiling ❌")
      return
    }

    const formData = new FormData()
    formData.append("name", name)
    if (icon) formData.append("icon", icon)
    formData.append("percentage", percentage)
    formData.append("order", order)

    try {
      setLoading(true)

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/skills/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      toast.success("Qo‘shildi ✅")

      setName("")
      setIcon(null)
      setPercentage("")
      setOrder("")

      fetchSkills()

    } catch {
      toast.error("Xatolik ❌")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("O‘chirasizmi?")) return

    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/skills/${id}/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    toast.success("O‘chirildi 🗑")
    fetchSkills()
  }

  return (
    <div className="skill-admin-root">

      <Crutpage />

      <div className="skill-admin-main">

      <form className="skill-form-box" onSubmit={handleSubmit}>
          <h2>Add Skill</h2>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setIcon(e.target.files?.[0] || null)}
          />

          <div className="skill-form-grid">
            <input
              placeholder="Percentage"
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />

            <input
              placeholder="Order"
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>

          <button>
            {loading ? "Loading..." : "Add Skill"}
          </button>
        </form>

        {/* LIST */}
        <div className="skill-list-box">
          <h1>My Skills</h1>

          <div className="skill-cards-grid">
            {skills.map((item) => (
              <div className="skill-card-box" key={item.id}>

                <img
                  src={
                    item.icon?.startsWith("http")
                      ? item.icon
                      : `${process.env.NEXT_PUBLIC_API_URL}${item.icon}`
                  }
                  alt=""
                />

                <h3>{item.name}</h3>

                <div className="skill-progress-wrap">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>

                <span>{item.percentage}%</span>

                <button
                  className="skill-delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillsAdmin