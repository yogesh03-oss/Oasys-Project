import React, { useEffect } from "react";
import "./UG.css";
import logo from "../../assets/logo.png";
import line from "../../assets/line.png";
import Enquiry from "../../Enquiry/Enquiry";
import { useNavigate } from "react-router-dom";

const UG = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const deptItems = document.querySelectorAll(".ug-dept-list");
    deptItems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ug-main">
      <div className="ug card-ad">
        <img src={logo} alt="Logo" />
        <div className="pg-top-menu">
             <ul className="gallary-top-menu">
            <h4 className="pic" onClick={() => navigate("/")}>
              HOME
            </h4>
            <h4 className="pic" onClick={() => navigate('/About')}>ABOUT US</h4>
            <h4 className="all-hover">
              COURSES
              <div className="gallary-hide-room">
                <hr className="gallary-hr" />
                <ul className="dropdown">
                  <li onClick={() => navigate("/UG")}>UG Cources</li>
                  <li onClick={() => navigate("/PG")}>PG Cources</li>
                </ul>
              </div>
            </h4>

            <h4 className="all-hover">
              ADMINISTRATION
              <div className="gallary-hide-room">
                <hr className="gallary-hr" />
                <li onClick={() => navigate("/Chairman")}>Chairman</li>
                <li onClick={() => navigate("/Principal")}>Principle</li>
                <li onClick={() => navigate("/Director")}>Director</li>
              </div>
            </h4>
            <h4 className="pic" onClick={() => navigate('/#')}>ADMISSION</h4>
            <h4 className="pic" onClick={() => navigate('/Gallary')}>GALLARY</h4>
            <h4 className="pic" onClick={() => navigate('/Contact')}>CONTACT US</h4>
          </ul>
        </div>

        <div className="ug-top-item">
          <h1>Courses</h1>
          <h4>
            <span className="ug-home" onClick={() => navigate("/")}>
              Home
            </span>{" "}
            /<span className="ug-ug"> UG Courses</span>
          </h4>
        </div>
      </div>

      <div className="ug-middle">
        <div className="ug-middle-top-menu">
          <div className="ug-middle-top-menu-item">
            <h1>UG Courses</h1>
            <img src={line} alt="Line" />
            <h2>
              We are the top Institute of technology in Trichy offering a
              four-year undergraduate degree program offering core
              specializations in Artificial Intelligence & Data Science,
              Computer Science, Electrical, Electronics, and Mechanical
              Engineering
            </h2>
          </div>
        </div>

        <div className="ug-dept">
          <div className="ug-dept-menu">
            <div className="ug-dept-list">
              <h1>Computer Science Engineering</h1>
              <h3>
                The Curriculum in B.E degree covers core specializations of
                Computer Science Engineering
              </h3>
            </div>
            <div className="ug-dept-list">
              <h1>Computer Science & Business System</h1>
              <h3>
                The curriculum in B.Tech degree covers core specializations of
                Computer Science & Business System
              </h3>
            </div>

            <div className="ug-dept-list">
              <h1>Artificial Intelligence & Machine Learning</h1>
              <h3>
                The curriculum in B.E degree covers core specializations of
                Artificial Intelligence and Machine Learning
              </h3>
            </div>

            <div className="ug-dept-list">
              <h1>Artificial Intelligence & Data Science</h1>
              <h3>
                The curriculum in B.Tech degree covers core specializations of
                Artificial Intelligence & Data Science
              </h3>
            </div>
            <div className="ug-dept-list">
              <h1>Information Technology</h1>
              <h3>
                The curriculum in B.Tech degree covers core specializations of
                Information Technology
              </h3>
            </div>
            <div className="ug-dept-list">
              <h1>Electrical & Electronics Engineering</h1>
              <h3>
                The curriculum in B.E degree covers core specializations of
                Electronics & Electronics Engineering
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Enquiry />
    </div>
  );
};

export default UG;
