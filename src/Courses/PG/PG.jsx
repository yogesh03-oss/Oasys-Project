import React, { useEffect } from "react";
import "./PG.css";
import logo from "../../assets/logo.png";
import line from "../../assets/line.png";
import Enquiry from "../../Enquiry/Enquiry";
import { useNavigate } from "react-router-dom";

const PG = () => {
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
               <h1>PG</h1>
               <h4>
                 <span className="ug-home" onClick={() => navigate("/")}>
                   Home
                 </span>
                 /<span className="ug-ug"> PG</span>
               </h4>
             </div>
           </div>

      <div className="ug-middle">
        <div className="ug-middle-top-menu">
          <div className="ug-middle-top-menu-item">
            <h1>PG Courses</h1>
            <img src={line} alt="Line" />
            <h2>
              Enroll now in the best business institute offering a two-year
              postgraduate program offering core specialization in Master of
              Business Administration in Trichy, Tamilnadu.
            </h2>
          </div>
        </div>

        <div className="ug-dept">
          <div className="ug-dept-menu">
            <div className="ug-dept-list">
              <h1>Master of BusinessAdministration</h1>
              <h3>
                MBA Programme which is aimed at providing a comprehensive
                coverage of all important areas and disciplines
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Enquiry />
    </div>
  );
};

export default PG;
