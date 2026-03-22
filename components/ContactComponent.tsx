"use client";

import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const id = toast.loading("Sending...");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact/`,
        form
      );
      setMessages((prev) => [form, ...prev]);

      toast.update(id, {
        render: "✅ Message sent!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      toast.update(id, {
        render: err.response?.data?.error || "❌ Error",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container"id="contact">
      <h1 className="contact-title">Get in Touch with Us</h1>
      <div className="messages-list">
        {messages.map((item, index) => (
          <div key={index} className="message-card">
            <h3>{item.name}</h3>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Subject:</strong> {item.subject}</p>
            <p className="msg-text">{item.message}</p>
          </div>
        ))}
      </div>

      <div className="contact-wrapper">

    
        <div className="contact-info">
          <p>I'm always open to discuss exciting projects 🚀</p>

          <div className="info-item">
            <p><strong>Instagram:</strong>sherdorbek_770_</p>
            <p><strong>Phone:</strong> +998 90 368 67 57</p>
            <p><strong>Location:</strong>Uzbekistan, Fergana</p>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/SherdorbekAbduqahhorov">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="https://t.me/Andrew77_77" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>

      <ToastContainer />
    </div>
  );
}