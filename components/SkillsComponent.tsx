"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function SkillsComponent() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/skills/`)
      .then((res) => {
        setSkills(res.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="skills-container containernew">
      <h1 className="skills-title" id="skills">My Skills</h1>

      <div className="skills-grid">
        {skills.slice(2).map((item) => (
          <div className="skill-card" key={item.id}>
            
            <div className="skill-icon">
              <img
                src={
                  item.icon?.startsWith("http")
                    ? item.icon
                    : `${process.env.NEXT_PUBLIC_API_URL}${item.icon}`
                }
                alt={item.name}
              />
            </div>

            <h2>{item.name}</h2>

            <div className="progress-box">
              <div
                className="progress-bar"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>

            <span className="percent">{item.percentage}%</span>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsComponent;