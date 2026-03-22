"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Crutpage from "../crutpage/page"

function ExperienceAdmin() {

  const [experiences, setExperiences] = useState<any[]>([])

  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("access")
      : null

  const fetchExperiences = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/experiences/`
    )
    setExperiences(res.data?.results || res.data)
  }

  useEffect(() => {
    fetchExperiences()
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!token) {
      toast.error("Login qiling ❌")
      return
    }

    try {
      setLoading(true)

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/experiences/`,
        {
          role,
          company,
          start_date: startDate,
          end_date: endDate,
          description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      toast.success("Qo‘shildi ✅")

      setRole("")
      setCompany("")
      setStartDate("")
      setEndDate("")
      setDescription("")

      fetchExperiences()

    } catch {
      toast.error("Xatolik ❌")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("O‘chirasizmi?")) return

    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/experiences/${id}/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    toast.success("O‘chirildi 🗑")
    fetchExperiences()
  }

  return (
    <div className="exp-admin-root">

      <Crutpage />

      <div className="exp-admin-main">

        {/* FORM */}
        <form className="exp-form-box" onSubmit={handleSubmit}>
          <h2>Add Experience</h2>

          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <div className="exp-date-grid">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button>
            {loading ? "Loading..." : "Add Experience"}
          </button>
        </form>

        {/* LIST */}
        <div className="exp-list-box">
          <h1>My Experience</h1>

          <div className="exp-timeline">
            {experiences.map((item) => (
              <div className="exp-item" key={item.id}>

                <div className="exp-dot"></div>

                <div className="exp-card">

                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>

                  <span className="exp-date">
                    {item.start_date} — {item.end_date}
                  </span>

                  <p>{item.description}</p>

                  <button
                    className="exp-delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ExperienceAdmin