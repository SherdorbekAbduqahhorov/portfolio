"use client";

import {
  FaPhone,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaGithub,
  FaCode,
  FaStar,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section-wrapper">
      <h2 className="contact-section-title">Let’s Connect</h2>

      <div className="contact-grid-layout">
        <a href="tel:+998903686757" className="contact-card-item">
          <FaPhone className="contact-card-icon" />
          <div>
            <p className="contact-card-label">Phone</p>
            <span className="contact-card-value">+998 90 368 67 57</span>
          </div>
        </a>

        <a
          href="https://instagram.com/Sherdorbek_770_"
          target="_blank"
          className="contact-card-item"
        >
          <FaInstagram className="contact-card-icon" />
          <div>
            <p className="contact-card-label">Instagram</p>
            <span className="contact-card-value">@Sherdorbek_770_</span>
          </div>
        </a>

        <a
          href="https://t.me/Andewr77_77"
          target="_blank"
          className="contact-card-item"
        >
          <FaTelegram className="contact-card-icon" />
          <div>
            <p className="contact-card-label">Telegram</p>
            <span className="contact-card-value">@Andewr77_77</span>
          </div>
        </a>

        <a
          href="mailto:abduqahhorovsherdorbek770@gmail.com"
          className="contact-card-item"
        >
          <FaEnvelope className="contact-card-icon" />
          <div>
            <p className="contact-card-label">Email</p>
            <span className="contact-card-value">
              abduqahhorovsherdorbek770@gmail.com
            </span>
          </div>
        </a>

        <a
          href="https://github.com/SherdorbekAbduqahhorov"
          target="_blank"
          className="contact-card-item"
        >
          <FaGithub className="contact-card-icon" />
          <div>
            <p className="contact-card-label">GitHub</p>
            <span className="contact-card-value">SherdorbekAbduqahhorov</span>
          </div>
        </a>
      </div>

      <div className="contact-footer-badge">
        <FaCode />
        <p>Built with passion • Full Stack Developer</p>
        <FaStar className="contact-footer-star" />
      </div>
    </section>
  );
}