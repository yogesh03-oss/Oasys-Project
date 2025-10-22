import React from "react";
import "./Contact.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import location from "../../src/assets/location_icon.svg";
import call from "../assets/call_icon.svg";
import mail from "../assets/mail_icon.svg";
import line from '../assets/line.png'
import Enquiry from "../Enquiry/Enquiry";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-us">
      <div className="ug card-ad">
        <img src={logo} alt="Logo" />
        <div className="pg-top-menu">
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

        <div className="ug-top-item">
          <h1>Contact</h1>
          <h4>
            <span className="ug-home" onClick={() => navigate("/")}>
              Home
            </span>
            /<span className="ug-ug"> Contact</span>
          </h4>
        </div>
      </div>

      <div className="contact-middle">
        <div className="contact-middle-menu">
          <div className="contact-menu">
            <img src={location} alt="" />
            <h2>
              Trichy-Thuraiyur Main Road, Pulivalam Village, Musiri TK., Trichy,
              Tamilnadu - 621006.
            </h2>
          </div>
          <div className="contact-menu">
            <img src={call} alt="" />
            <h3>+91 74012 98259 </h3>
            <h3> +91 95512 18000</h3>
            <h2>Mon-Sat 8:30Am - 5:30Pm</h2>
          </div>
          <div className="contact-menu">
            <img src={mail} alt="" />
            <h1>contact@oasys.edu.in </h1>
            <h2>online help support</h2>
          </div>
        </div>

        <div className="conntact-middle-item">
          <h1>FEW FREQUENTLY ASKED QUESTIONS:</h1>
          <img src={line} alt="" />
          <div className="contact-middle-item-collapes">
            <h2>What is the admission procedure of OIT?</h2>
            <h3>Admission Procedure as per the norms of Tamilnadu Engineering Admission to Engineering Colleges.</h3>
            <input type="checkbox" /> Admission Quota: 65% Govt. Quota and 35% Management Quota <br />
            <input type="checkbox" /> For Govt. Quota counseling by tamilnadu government, management quota counseling is conducted by OASYS IOTAM.
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="OASYS Intitutes of Technology"
          src="https://www.google.com/maps?q=OASYS+Institute+of+Technology,+Pulivalam,+Trichy&output=embed"
          frameborder="1"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Enquiry />
    </div>
  );
};

export default Contact;
