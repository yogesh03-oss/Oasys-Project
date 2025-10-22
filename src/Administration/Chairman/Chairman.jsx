import React, { useState } from 'react'
import './Chairman.css'
import logo from '../../assets/logo.png'
import chairan from '../../assets/Photos/Chairman.jpg'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import { useNavigate } from 'react-router-dom'
import Enquiry from '../../Enquiry/Enquiry'


const Chairman = () => {
  const navigate = useNavigate();
 
 

  return (
    <div>
      <div className="chairman-top card-ad">
        <img src={logo} alt="" />
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
        <div className="chairman-top-item">
          <h1>Chairman</h1>
          <h4><span className='chairman-home' onClick={() => navigate('/')}>Home</span>  /  <span className='chairman-chairman'>Chairman</span></h4>
        </div>

      </div>

      <div className="chairman-middle">
        <div className="chairman-middle-top">
        <div className="chairman-middle-menu">
         
          <div className="chairman-middle-menu-child">
            <h3>Chairman</h3>
            <h1>LATE SHRI. K. RAMAJAYAM (1933 - 2022)</h1>
            <h2>(Trustee - KRK Educational Trust )</h2>

            <div className="chairman-middle-menu-contact">
              <img className='chairman-call-icon' src={call} alt="" /><p>04327-235444</p>
              <img className='chairman-mail-icon' src={mail} alt="" /><p>contact@oasys.edu.in</p>
            </div>
             </div>
          </div>
        </div>
     <div className="chairman-middle-para">
       <div className="chairman-middle-menu-photo">
            <img src={chairan} alt="" />
          </div>
          <div className='chairman-middle-menu-item'>
        <p className='chairaman-para1'>Shri K.Ramajayam is a well experience soft 
          spoken teacher who had been in teaching for more than 45 years and was the
          head of the institution AGM High school, Eragudi, Thuariyur Taluk, Tiruchirappalli 
          district</p><br />
        <p className='chairaman-para2'> He developed the institution from elementary level to 
          higher secondary level and introduced many novel methods of teachings in line with the        
          requirements of the local community and succeeded in upgrading the standards of education 
          over the years</p><br />
        <p className='chairaman-para3'> His work in this region is commendable as he has groomed 
          many youngsters to take up voluntary work, social services, organize blood donation camps, 
          temple cleaning etc.</p><br />
        <p className='chairaman-para4'> Posthumously he is guiding us through his blessings and ideologies</p>
     </div>
     </div>
     </div>
     
      <Enquiry />
    </div>
  )
}

export default Chairman;
