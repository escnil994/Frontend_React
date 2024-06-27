import React, { useState, useEffect } from 'react';
import '../../assets/css/AppProfile.css'; // Asegúrate de tener este archivo CSS
import { AppGetUtils } from '../../services/AppUserService';

const AppProfile = () => {
  const [layout, setLayout] = useState({ image: 'col-4', info: 'col-8' });
  const [skills, setSkills] = useState("");
  const [courses, setCourses] = useState("");
  const [certifications, setCertifications] = useState("");
  const [leftSkills, setLeftSkills] = useState([]);
  const [rightSkills, setRightSkills] = useState([]);
  const [experienceDoll, setExperienceDoll] = useState("");

  useEffect(() => {
    if (window.screen.width < 900) {
      setLayout({ image: 'col-12', info: 'col-12' });
    }
  }, []);

  const fetchData = async () => {
    try {
      const result = await AppGetUtils();
      if (result && result.images) {
        setSkills(result.images.skills);
        setCertifications(result.images.certifications);
        setCourses(result.images.curses);
        setExperienceDoll(result.images.experience_doll || "");
      } else {
        console.error("Result does not contain 'images'");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (skills) {
      const skillsArray = skills.split(';');
      const half = Math.ceil(skillsArray.length / 2);
      let leftArray = skillsArray.slice(0, half);
      let rightArray = skillsArray.slice(half);

      console.log(leftArray.length + "   " + rightArray.length);
      if (leftArray.length > rightArray.length) {
        rightArray.push("Much more...");
      }

      setLeftSkills(leftArray);
      setRightSkills(rightArray);
    }
  }, [skills]);

  return (
    <div id="body" className="container">
      <div className="row">
        <h3 className="general-text">This is my information</h3>
        <hr />
        <div className={`${layout.image} text-center`}>
          <div className="image-user">
            <img
              src="https://res.cloudinary.com/dorqesogu/image/upload/v1719472786/utils/i53rqymijuosviircmzi.jpg"
              alt="Profile"
              className="img-thumbnail rounded-circle"
            />
          </div>
          <hr />
          <h4>Nilson Eduardo Escobar Vicente</h4>
          <p className="JetBrains">Computer System Engineering at University of El Salvador</p>
          <code className="text-secondary JetBrains">2019 - present</code>
        </div>
        <div className={layout.info}>
          <h3 className="general-text">Resume</h3>
          <div className="about-text">
            <p>🚀 With three years as a support analyst at Dollarcity, I've gained expertise in systems administration, software/hardware management, and network troubleshooting.</p>
            <p>💡 As a programming enthusiast, I've learned programming languages, databases, and tools. This skill set has supported both development projects at Dollarcity and personal projects.</p>
            <p>☁️ My experience with cloud technology is improving, along with other tools.</p>
            <p>💻 I'm dedicated to continuous learning and expanding my technical knowledge.</p>
            <p>🌟 Driven by growth and personal improvement, my self-taught approach helps me quickly acquire new tech skills to tackle challenges.</p>
            <p>I look forward to opportunities to advance my professional development and contribute to innovative projects!</p>
          </div>
          <hr />
        </div>
        <h3 className="general-text">Experience:</h3>
        <ul className="text-size">
          <h4 className="general-text">Technical Support Agent</h4>
          <div className="about-text">
            <li className="list-group-item text-start text-size">Providing support to residential customers with services like TV, Internet, and phone lines</li>
          </div>
          <h4 className="general-text">Support Center Specialist</h4>
          <div className="about-text">
            {experienceDoll && typeof experienceDoll === 'string' && experienceDoll.split(";;").map((experience, index) => (
              <li key={index} className="list-group-item text-start text-size">- {experience}.</li>
            ))}
          </div>
        </ul>
        <hr />
        <div className="row bgcert mb-3 p-3 rounded">
          <div className="col-6">
            <h4 className="general-text">Courses</h4>
            <ul className="m-3 text-size JetBrains">
              {courses.split(";").map((course, index) => (
                <li key={index} className="text-start text-size">{course}</li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h4 className="general-text">Certifications</h4>
            <ul className="m-3 text-size JetBrains">
              {certifications.split(";").map((certification, index) => (
                <li key={index} className="text-start text-size">{certification}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row bgskills mb-3 p-3 rounded">
          <h4 className="general-text">Skills</h4>
          <div className="col-6">
            <ul className="m-3 text-size JetBrains">
              {leftSkills.map((skill, index) => (
                <li key={index} className="text-start text-size">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <ul className="m-3 text-size JetBrains">
              {rightSkills.map((skill, index) => (
                <li key={index} className="text-start text-size">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppProfile;
