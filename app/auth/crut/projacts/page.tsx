"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Crutpage from "../crutpage/page"

function Projects() {
  const [projects, setProjects] = useState<any[]>([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [technologies, setTechnologies] = useState("")
  const [demoLink, setDemoLink] = useState("")
  const [repoLink, setRepoLink] = useState("")
  const [order, setOrder] = useState("")
  const [loading, setLoading] = useState(false)

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("access")
      : null

  const fetchProjects = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/`
    )
    const data = res.data.results || res.data
    setProjects(data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!token) return toast.error("Avval login qiling ❌")

  const formData = new FormData()
  formData.append("title", title)
  formData.append("description", description)
  if (image) formData.append("image", image) // ✅ rasm fayl
  formData.append("technologies", technologies)
  formData.append("demo_link", demoLink)
  formData.append("repo_link", repoLink)
  formData.append("order", order.toString()) // number -> string

  try {
    setLoading(true)
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    toast.success("Project qo‘shildi ✅")
    setTitle(""); setDescription(""); setImage(null)
    setTechnologies(""); setDemoLink(""); setRepoLink(""); setOrder("")
    fetchProjects()
  } catch (err: any) {
    console.error(err.response?.data || err)
    toast.error(err.response?.data?.detail || "Xatolik ❌")
  } finally { setLoading(false) }
}

  const handleDelete = async (id: number) => {
    if (!confirm("Delete?")) return

    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}/`,
      { headers: { Authorization: `Bearer ${token}` } }
    )

    toast.success("Deleted ✅")
    fetchProjects()
  }

  return (
    <div className="admin-wrapper">
      <Crutpage />

      <div className="admin-main">

        {/* FORM */}
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2>Add Project</h2>

          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />

          <input type="file" onChange={e => setImage(e.target.files?.[0] || null)} />

          <div className="admin-grid">
            <input placeholder="Technologies" value={technologies} onChange={e => setTechnologies(e.target.value)} />
            <input placeholder="Demo link" value={demoLink} onChange={e => setDemoLink(e.target.value)} />
            <input placeholder="Repo link" value={repoLink} onChange={e => setRepoLink(e.target.value)} />
            <input placeholder="Order" value={order} onChange={e => setOrder(e.target.value)} />
          </div>

          <button>{loading ? "Loading..." : "Add Project"}</button>
        </form>

        {/* LIST */}
        <div className="admin-list">
          <h1>My Projects</h1>

          <div className="admin-cards">
            {projects.map((item) => (
              <div className="admin-card" key={item.id}>

                <img
                  src={
                    item.image?.startsWith("http")
                      ? item.image
                      : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`
                  }
                />

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="admin-tags">{item.technologies}</div>

                <div className="admin-links">
                  <a href={item.demo_link}>Demo</a>
                  <a href={item.repo_link}>Code</a>
                </div>

                <button
                  className="admin-delete"
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

export default Projects