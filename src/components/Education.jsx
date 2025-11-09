import React from 'react';
import './Education.css';
import EduImg from "../components/Education.png"

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-heading">
        Education
        <img
          src={EduImg}
          alt="Education Icon"
          className="education-icon"
        />
      </h2>
      <hr className="skills-divider" />
      <div className="education-list">
        <div className="education-item">
          <div className="education-details">
            <span className="bullet-point"></span>
            <div>
              <h3>Kongunadu College of Engineering and Technology</h3>
              <p className="sub-title">B.E/ Electronics and Communication Engineering</p>
              <p className="score">7.1 CGPA</p>
            </div>
          </div>
          <span className="education-year">2021-25</span>
        </div>
        <div className="education-item">
          <div className="education-details">
            <span className="bullet-point"></span>
            <div>
              <h3>Government Higher Secondary School, Thandalaiputhur</h3>
              <p className="sub-title">HSC TN State Board</p>
              <p className="score">65%</p>
            </div>
          </div>
          <span className="education-year">2018-19</span>
        </div>
        <div className="education-item">
          <div className="education-details">
            <span className="bullet-point"></span>
            <div>
              <h3>Government Higher Secondary School, Thandalaiputhur</h3>
              <p className="sub-title">SSLC TN State Board</p>
              <p className="score">90.6%</p>
            </div>
          </div>
          <span className="education-year">2016-17</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
