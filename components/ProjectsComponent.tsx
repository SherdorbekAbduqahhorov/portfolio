"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function ProjectsComponent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`)
      .then((res) => {
        const sliced = res.data?.results?.slice(0, 4);
        setProjects(sliced);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="containernew">
      <h1 className="title" id="projects">My Projects</h1>

      <div className="projects-grid">
        {projects.map((item) => (
          <div className="card" key={item.id}>
            
            <div className="image-box">
              <img
  src={
    item.image?.startsWith("http")
      ? item.image
      : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`
  }
  alt={item.title}
/>
            </div>

            <h2>{item.title}</h2>

            <p className="desc">{item.description}</p>

            <p className="tech">{item.technologies}</p>

            <div className="buttons">
              <a href={item.demo_link} target="_blank">
                Demo
              </a>
              <a href={item.repo_link} target="_blank">
                Code
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;