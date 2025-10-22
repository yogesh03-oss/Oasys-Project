import React from 'react';
import "./Director.css";
import logo from '../../assets/logo.png'
import director from '../../assets/Photos/MD.png'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import line from '../../assets/line.png'
import { useNavigate } from 'react-router-dom';
import Enquiry from '../../Enquiry/Enquiry';

const Director = () => {
  const navigate = useNavigate();

  return (
    <div className='director'>
      <div className="director-top card-ad">
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

        <div className="director-top-item">
          <h1>Director</h1>
          <h4><span className='director-home' onClick={() => navigate('/')}>Home</span>  /  <span className='director-chairman'>MD, Message From M.D</span></h4>
        </div>

      </div>

        <div className="director-middle">
                <div className="director-middle-top">
                <div className="director-middle-menu">
                 
                  <div className="director-middle-menu-child">
                    <h3>Managing Director</h3>
                    <h1>SHRI. K. R. ILANGHOVAN</h1>
                    <h2>Founder - Managing Director - Oasys Group of Companies</h2>
        
                    <div className="director-middle-menu-contact">
                      <img className='director-call-icon' src={call} alt="" /><p>04327-235444</p>
                      <img className='director-mail-icon' src={mail} alt="" /><p>contact@oasys.edu.in</p>
                    </div>
                     </div>
                  </div>
                </div>
             <div className="director-middle-para">
               <div className="director-middle-menu-photo">
                    <img src={director} alt="" />
                  </div>
                  <div className='director-middle-menu-item'>
                <p className='director-para1'>Known for his simplicity and generosity Mr. Ilanghovan is a man whose success is defined by his principles, his leadership, his universalism and sense of inclusion. After his Bachelors in Technology from A.C.C.T, Anna University, in the year 1984, he gained experience in many industries which made him the first generation entrepreneur </p><br />
                <p className='director-para2'> In the year 2000 he promoted the company 'Omne Agate Systems Private Limited' which grew under his leadership and today has transited as "OASYS GROUP" spreading across various industries like Information Technology</p><br />
                <p className='director-para3'> Education, Energy, Hospitality, E-Governance and Media. He believes in leading a life of austerity and spirituality and his life is a wonderful inspiration for all who wish to lead a successful, centered life.</p><br />
                <h1 className='director-para4'> Message From M.D</h1> 
                <img src={line} alt="" /><br />
                <em>Education is the most powerful weapon which you can use to change the world” - Nelson Mandela</em><br />
                <p>Let me welcome you to our Fold! As we welcome you, the future leaders and productive citizens of the world, I would like to stress on our vision of providing quality education with high academic standards to rural students with urban infrastructure. Stand at top among other established institutions by inculcating discipline, Character and knowledge.</p><br />
                <p>It is our endeavour to impart education which enhances the personality of our students, giving them the strength of character and intellect, which make them reliable and teaches them to be self-sufficient in this extremely competitive world.</p><br />
                <p>Our objective is not only to educate, but also to inculcate integrity, honesty, values and capability for hard work. At OASYS IT our vision is to help our students realise their dreams and to send them forth into the world, as confident individuals chasing their goals. We at OASYS IT welcome you to become a part of an incredible journey where we encourage you to spread your wings and soar, as you follow your dreams and turn them into reality.</p><br />
            
              <div className="director-middle-add">
              <p>My best wishes.</p>
              <h2>SHRI. K. R. ILANGHOVAN</h2>
              <h3>Founder - Managing Director - OASYS Group of Companies.</h3>
             </div>

             </div>
           
             </div>
             </div>
             

      <Enquiry />
    </div>
  )
}

export default Director;
