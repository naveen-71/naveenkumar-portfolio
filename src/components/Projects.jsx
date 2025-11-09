import React from 'react';
import './Projects.css'; 

const Projects = () => {
  const projects = [
    
    {
        name: "Personal Portfolio Website",
        technology: "React, Fgma",
        year: "2023",
        link: "#",
    },
    {
      name: "Todo List App",
      technology: "React",
      year: "2023",
      link: "#",
    },
    {
        name: "Simple Calculator",
        technology: "React",
        year: "2023",
        link: "#",
      },
    {
      name: "Quiz App",
      technology: "React",
      year: "2024",
      link: "https://github.com/naveen-71/QuizApp",
    },
    {
      name: "Movie Entry App",
      technology: "Typescrpt, Node JS, SQL",
      year: "2025",
      link: "https://github.com/naveen-71/crackstar-movies",
    },
  ];

  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <p>Explore the Wonders!</p>
      <hr className="projects-divider" />
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-info">
              <span className="project-icon">➤</span>
              <div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-tech">Technology Used: {project.technology}</p>
                <a href={project.link} className="project-link">
                  Link
                </a>
              </div>
            </div>
            <div className="project-year">
              <span>{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
