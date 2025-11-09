import React from "react";
import "./Home.css";
import Profile from "../components/mine.jpg";
import Process from "../components/process-removebg-preview.png";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const Home = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:naveenkumarece71@gmail.com";
  };

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1y4gIcrCz23MDtwQbVg3vwoF64HEWahTV/view?usp=sharing";
    link.download = "Naveenkumar_Resume.pdf";
    link.click();
  };
  const handMailClick = () => {
    window.location.href =
      "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQLxtcXXllWWbdlHmdplBpzFmTGgzWrCDWwdRNBpSkrvvLHZMzTQdvjGMZDkghrCxdshQh";
  };
  const handLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/naveenkumar-s 6a5659283/";
  };
  const handinstagramClick = () => {
    window.location.href = "https://www.instagram.com/s___naveen___22/";
  };
  const handGithubClick = () => {
    window.location.href = "https://github.com/naveen-71";
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="portfolio-title">PORTFOLIO</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="main-content">
        <div className="image-container">
          <img src={Profile} alt="Profile" className="profile-image" />
        </div>
        <div className="text-container">
          <h2 className="intro">
            Hello, I’m <span className="name">Naveenkumar</span>
          </h2>
          <div className="animated-text">
            <span className="role">F</span>
            <span className="role">u</span>
            <span className="role">l</span>
            <span className="role">l</span>
            <span className="role">S</span>
            <span className="role">t</span>
            <span className="role">a</span>
            <span className="role">c</span>
            <span className="role">k</span>
            <span className="role"> </span>
            <span className="role">W</span>
            <span className="role">e</span>
            <span className="role">b</span>
            <span className="role"> </span>
            <span className="role">D</span>
            <span className="role">e</span>
            <span className="role">v</span>
            <span className="role">e</span>
            <span className="role">l</span>
            <span className="role">o</span>
            <span className="role">p</span>
            <span className="role">e</span>
            <span className="role">r</span>
          </div>
          <p className="description">
            I will continually strive to learn and diligently work towards
            achieving better results in my career
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Process}
              alt="process"
              style={{ maxWidth: "100%", height: "200px", margin: "30px" }}
            />
          </div>
          <div className="icons">
            <i class="fa-brands fa-linkedin" onClick={handLinkedinClick}></i>
            <i class="fa-solid fa-envelope" onClick={handMailClick}></i>
            <i class="fa-brands fa-instagram" onClick={handinstagramClick}></i>
            <i class="fa-brands fa-github" onClick={handGithubClick}></i>
          </div>
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
  );
};

export default Home;
