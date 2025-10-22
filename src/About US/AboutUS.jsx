import React from 'react'
import './AboutUS.css';
import line from '../../src/assets/line.png'
import college from '../assets/college3.jpg';
import Enquiry from "../Enquiry/Enquiry";
import { useNavigate } from 'react-router-dom';


const AboutUS = () => {
  const navigate = useNavigate()
  return (
    <div className='aboutas'>
      <div className="about-top">
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
            <h4 className="pic">ADMISSION</h4>
            <h4 className="pic" onClick={() => navigate('/Gallary')}>GALLARY</h4>
            <h4 className="pic" onClick={() => navigate('/Contact')}>CONTACT US</h4>
          </ul>
      </div>
      <div className="about-middele">
        <h1>About OASYS IT</h1>
        <img src={line}alt="" />
        <h2>OASYS INSTITUTE OF TECHNOLOGY (OASYS IT) is an Industry Connected Institute, approved by the AICTE, New Delhi and affiliated to Anna University and is a co-educational engineering college located at Trichy-Thuraiyur Main Road, Pulivalam ,Trichy, Tamil Nadu, India. It was established in 2010 by the KRK Educational Trust. OASYS Institute of Technology in Tamil Nadu was established with an objective of providing quality technical education with high academic standards to rural students with urban infrastructure and to make it stand at top among other established institutions by inculcating discipline.</h2>
        <h2>Character and knowledge OASYS Institute of Technology has one of best faculties who help and motivate students to reach their dreams. Apart from interactive classroom scenario, they also offer periodic guest lectures by experts from industries and academic background which provides thirst to the students to learn and prepare for the ready-to-serve industrial requirements. The college with its state-of- the- art infrastructural facilities and academic ambience to rural students has earned recognition as one of the reputed educational institutions for men and women in India.</h2>
      </div>
      <div className="about-right-img">
        <img src={college} alt="" />
      </div>
      <div className="about-last">
         <Enquiry />
      </div>
    </div>
  )
}

export default AboutUS
