import React from 'react'

function Projectlar() {
  return (
    <section className="projects" id='projects'>
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        
        {/* Blogify */}
        <div className="project-card">
          <img src="../img/blogify.png" alt="Blogify project" />
          <h3>Blogify</h3>
          <p>
            I created Blogify to allow users to write blogs, read others' posts,
            and share images.
          </p>
          <span className="tag">Website</span>
          <a
            href="https://blogifyproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>

        {/* Portfolio */}
        <div className="project-card">
          <img src="../img/myportfolio.jpg" alt="Portfolio project" />
          <h3>My Portfolio</h3>
          <p>
            I built this portfolio to showcase my projects, skills, and experience.
          </p>
          <span className="tag">Portfolio</span>
          <a
            href="https://sherdorbeksportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>

        {/* Christmas Shop */}
        <div className="project-card">
          <img src="../img/newyear.png" alt="Christmas shop project" />
          <h3>Christmas Shop</h3>
          <p>
            A simple marketplace project built for friends to explore and shop.
          </p>
          <span className="tag">E-commerce</span>
          <a
            href="https://littleshopchristmas.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>

        {/* Images App */}
        <div className="project-card">
          <img src="../img/imgchoos.png" alt="Images app" />
          <h3>Image Gallery</h3>
          <p>
            A platform to upload, store, and view different types of images.
          </p>
          <span className="tag">App</span>
          <a
            href="https://choosimages.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>

        {/* Universities */}
        <div className="project-card">
          <img src="../img/unv.png" alt="Universities project" />
          <h3>Top Universities</h3>
          <p>
            Users can explore information about the top 10 universities worldwide.
          </p>
          <span className="tag">Education</span>
          <a
            href="https://top10universities.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>

        {/* Todo */}
        <div className="project-card">
          <img src="../img/todo.png" alt="Todo app" />
          <h3>Todo App</h3>
          <p>
            A simple application where users can manage their daily tasks.
          </p>
          <span className="tag">Productivity</span>
          <a
            href="https://regal-bubblegum-456ebe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projectlar