import React from "react";
import "./Hero.css";
import team from "../../assets/locaction_files/Icon_team.png";
import banner from "../../assets/locaction_files/banner-inner2.png";
import { useNavigate } from 'react-router-dom';
import Contact from "../Contact/Contact";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero card-yd">
      <div className="hero-menu">
        <ul className="hero-menu">
          <li className="all-hover" onClick={() => navigate('/')}>HOME</li>
          <li className="all-hover" onClick={() => navigate('/About')}>ABOUT US</li>

          <h4 className="all-hover">
            COURSES
            <div className="gallary-hide-room">
              <hr className='gallary-hr' />
              <ul className="dropdown">
                <li onClick={() => navigate('/UG')}>UG Cources</li>
                <li onClick={() => navigate('/PG')}>PG Cources</li>
              </ul>
            </div>
          </h4>
          <h4 className="all-hover">
            ADMINISTRATION
            <div className="gallary-hide-room">
              <hr className='gallary-hr' />
              <ul className="dropdown">
                <li onClick={() => navigate('/Chairman')}>Chairman</li>
                <li onClick={() => navigate('/Principal')}>Principle</li>
                <li onClick={() => navigate('/Director')}>Director</li>
              </ul>
            </div>
          </h4>

          <li className="all-hover">ADMISSION</li>
          <li className="all-hover" onClick={() => navigate('/Gallary')}>GALLARY</li>
          <li className="all-hover" onClick={() => navigate('/Contact')}>CONTACT US</li>
        </ul>
      </div>

      <br />
      <div className="hero-yogeshsri">
        <div className="hero-yogesh">
          <h1 className="hero-box"><span className="hero-study">Study</span><span className="hero-research">Research</span></h1>
          <br />
          <br />
          <br />
          <br />

          <p>
            At Oasys Institute of Technology, we believe in fostering innovation
            and empowering our students to reach new heights. Our Knowledge Hub
            is designed to be a dynamic platform where students can explore the
            latest project ideas and submit their own innovative proposals. This
            is the gateway to unleashing your creativity and gaining practical
            experience in real-world projects.
          </p>

        </div>

        <div className="sri">
          <div className="welcome-right">
            <img src={banner} alt="" />
          </div>

          <div className="ysys">
            <a className="hero-link" href="https://admission.oasys.edu.in/college/be/5/">
              APPLY ONLINE
            </a>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Hero;
