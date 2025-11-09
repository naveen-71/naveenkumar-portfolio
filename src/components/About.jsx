import React from "react";
import "./About.css";
import IMG from "../components/Me.jpg";

const About = () => {

    const handleHireMeClick = () => {
        window.location.href = "mailto:naveenkumarece71@gmail.com";
      };
    
      const handleResumeClick = () => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/file/d/1y4gIcrCz23MDtwQbVg3vwoF64HEWahTV/view?usp=sharing";
        link.download = "Naveenkumar_Resume.pdf";
        link.click();
      };
  return (
    <section className="about">
      <div className="container">
        <h1 className="about-heading">About</h1>
        <hr className="skills-divider" />
        <div className="about-content">
          <div className="about-image">
            <img src={IMG} alt="Profile" />
          </div>
          <div className="about-highlights">
            <h3>Few Highlights:</h3>
            <ul>
              <li>
                <span className="icon">▶</span>
                Proficient in building responsive and interactive web applications using React JS 18
              </li>
              <li>
                <span className="icon">▶</span>
                Skilled in managing and optimizing databases using MySQL
              </li>
              <li>
                <span className="icon">▶</span>
                Experienced in creating visually stunning and user-friendly designs using Figma
              </li>
              <li>
                <span className="icon">▶</span>
                Collaborative team player with a proven ability to support and guide teammates to achieve shared goals and success
              </li>
            </ul>
            <div className="buttons">
            <button className="hire-me" onClick={handleHireMeClick}>
              Hire Me
            </button>
            <button className="resume" onClick={handleResumeClick}>
              Resume
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
