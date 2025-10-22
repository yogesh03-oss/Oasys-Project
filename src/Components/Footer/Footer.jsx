import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import line from "../../assets/line.png";
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'
import mail from '../../assets/mail_icon.svg'




const Footer = () => {
  return (
    /*www.joy.dev.in*/
    
    <div className='footer'>
      <div className="footer-middle">
        <div className="footer-mid-one">
          <h2>Useful Links</h2>
          <img src={line} alt="" />
          <ul>
            <li>News & Admission</li>
            <li>Training Courses</li>
            <li>Scholarship</li>
            <li>Recruiters</li>
            <li>Mandatory disclosure 2025-26</li>
            <li>Privacy Policy</li>
          </ul>
          </div>

          <div className="footer-mid-two">
            <h2>Office Hours</h2>
            <img src={line} alt="" />
            <ul>
              <li>Monday – Saturday ------09:00 - 16:30</li>
              <li>Sunday -------------------Holiday</li>
            </ul>
          </div>
          
          <div className="footer-mid-three">
            <h2>Contact Info</h2>
            <img className='location' src={line} alt="" />
            <ul>
              <li> <img src={location} alt="" />Trichy-Thuraiyur Main Road, Pulivalam Village, Musiri TK., Trichy, Tamil Nadu - 621006.</li>
              <li> <img src={call} alt="" />+91 95512 18000</li>
              <li> <img src={call} alt="" />+91 74012 98259</li>
              <li> <img src={mail} alt="" />contact@oasys.edu.in</li>
            </ul>
          </div>
      </div>
  
      <div className="footer-bottom">
     <p className="footer-bootom-left">© 2027 Yogesh. All right reseved.</p>
      <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>privacy policy</p>
        <p>Connet with me</p>

       
     </div>
     </div>
     
    </div>
    
  
  )
}

export default Footer;