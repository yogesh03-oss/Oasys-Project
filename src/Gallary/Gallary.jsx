import React from "react";
import "./Gallary.css";
import line from "../assets/line.png";
import logo from "../assets/logo.png";
import Enquiry from "../Enquiry/Enquiry";
import hackthon1 from "../assets/Photos/hackthon1.jpg";
import hackthon2 from "../assets/Photos/hackothan2.jpg";
import hackthon3 from "../assets/Photos/hackothan3.jpg";
import hackthon4 from "../assets/Photos/hackothan4.jpg";
import hackthon5 from "../assets/Photos/hackothan5.jpg";
import hackthon6 from "../assets/Photos/hackothan6.jpg";
import hackthon7 from "../assets/Photos/hackothan7.jpg";
import hackthon8 from "../assets/Photos/hackothan8.jpg";
import hackthon9 from "../assets/Photos/hackothan9.jpg";
import sport1 from "../assets/Photos/sport1.jpg";
import sport2 from "../assets/Photos/sport2.jpg";
import sport3 from "../assets/Photos/sport3.jpg";
import sport4 from "../assets/Photos/sport4.jpg";
import graduation1 from "../assets/Photos/graduation1.jpg";
import graduation2 from "../assets/Photos/graduation2.jpg";
import graduation3 from "../assets/Photos/graduation3.jpg";
import graduation4 from "../assets/Photos/graduation4.jpg";
import graduation5 from "../assets/Photos/graduation5.jpg";
import graduation6 from "../assets/Photos/graduation6.jpg";
import college1 from "../assets/Photos/college1.jpg";
import college2 from "../assets/Photos/college2.jpg";
import college3 from "../assets/Photos/college3.jpg";
import college4 from "../assets/Photos/college4.jpg";
import { useNavigate } from "react-router-dom";

const Gallary = () => {
  const navigate = useNavigate();

  return (
    <div className="gallary">
      <div className="gallary-top card-gra">
        <img src={logo} alt="" />
        <div className="gallary-top-menu">
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

        <div className="gallary-top-item">
          <h1>Gallary</h1>
          <h4>
            <span className="gallary-home" onClick={() => navigate("/")}>
              Home
            </span>{" "}
            / <span className="gallary-gallary">Gallary</span>
          </h4>
        </div>
      </div>
      <div className="gallary-bottom">
        <div className="gallary-bottom-left">
          <ul className="gallary-bottom-left">
            <h5>2024-2025</h5>
            <h5>2023-2024</h5>
            <h5>2022-2023</h5>
            <h5>2021-2022</h5>
            <h5>Courses</h5>
            <h5>Campus</h5>
          </ul>
        </div>

        <div className="gallary-bottom-right">
          <div className="gallary-bottom-right-hackathan">
            <div className="gallary-bottom-right-menu">
              <h1>Hackathon 2025</h1>
              <img src={line} alt="" />
            </div>
            <div className="gallary-bottom-right-photos">
              <img src={hackthon1} alt="" />
              <img src={hackthon2} alt="" />
              <img src={hackthon3} alt="" />
              <img src={hackthon4} alt="" />
              <img src={hackthon5} alt="" />
              <img src={hackthon6} alt="" />
              <img src={hackthon7} alt="" />
              <img src={hackthon8} alt="" />
              <img src={hackthon9} alt="" />
            </div>
          </div>

          <div className="gallary-bottom-right-photos-sport">
            <div className="gallary-bottom-right-menu">
              <h1>Sports day</h1>
              <img src={line} alt="" />
            </div>
            <div className="gallary-bottom-right-photos">
              <img src={sport1} alt="" />
              <img src={sport2} alt="" />
              <img src={sport3} alt="" />
              <img src={sport4} alt="" />
            </div>
          </div>

          <div className="gallary-bottom-right-graduation-photos">
            <div className="gallary-bottom-right-menu">
              <h1>Graduation Day</h1>
              <img src={line} alt="" />
            </div>
            <div className="gallary-bottom-right-photos">
              <img src={graduation1} alt="" />
              <img src={graduation2} alt="" />
              <img src={graduation3} alt="" />
              <img src={graduation4} alt="" />
              <img src={graduation5} alt="" />
              <img src={graduation6} alt="" />
            </div>
          </div>

          <div className="gallary-bottom-right-college-day-photos">
            <div className="gallary-bottom-right-menu">
              <h1>College Day</h1>
              <img src={line} alt="" />
            </div>
            <div className="gallary-bottom-right-photos">
              <img src={college1} alt="" />
              <img src={college2} alt="" />
              <img src={college3} alt="" />
              <img src={college4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Enquiry />
    </div>
  );
};

export default Gallary;
