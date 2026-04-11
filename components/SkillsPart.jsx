"use client";
import { SiKalilinux } from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 100 },
  { name: "CSS", icon: <FaCss3Alt />, level: 100 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 100 },
  { name: "SASS", icon: <SiSass />, level: 80 },
  { name: "JavaScript", icon: <SiJavascript />, level: 90 },
  { name: "TypeScript", icon: <SiTypescript />, level: 80 },
  { name: "React.js", icon: <FaReact />, level: 95 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
  { name: "GitHub", icon: <FaGithub />, level: 100 },
  { name: "Git", icon: <FaGitAlt />, level: 80 },
  { name: "Kali Linux", icon: <SiKalilinux />, level: 90 },
];

export default function SkillsPart() {
  return (
    <section className="skills">
      <h2 className="title" id="skills">My Skills</h2>

      <div className="container">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <div className="icon">{skill.icon}</div>
            <p className="name">{skill.name}</p>

            <div className="progress">
              <div
                className="fill"
                style={{ width: `${skill.level}%` }}
              >
                <span className="percent">
                  {skill.level}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}