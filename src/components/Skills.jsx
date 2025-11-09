import React from 'react';
import './Skills.css'; // Ensure you have a CSS file for styling

const Skills = () => {
  const skills = [
    { name: "React 18", level: "70%" },
    { name: "Node JS", level: "60%" },
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "Express", level: "65%" },
    { name: "MySQL", level: "75%" },
    { name: "Python", level: "70%" },
    { name: "Bootstrap", level: "85%" },
    { name: "Figma", level: "85%" },
  ];

  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <p>Belong Anywhere!</p>
      <hr className="skills-divider" />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-dot"></span>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
