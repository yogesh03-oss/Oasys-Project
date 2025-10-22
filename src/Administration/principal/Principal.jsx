import React from 'react'
import './Principal.css'
import logo from '../../assets/logo.png';
import mail from '../../assets/mail_icon.svg';
import call from '../../assets/call_icon.svg';
import line from '../../assets/line.png'
import principal from '../../assets/principal.jpg'
import { useNavigate } from 'react-router-dom';
import Enquiry from '../../Enquiry/Enquiry';

const Principal = () => {
  const navigate = useNavigate();

  return (
    <div className='principal'>
      <div className="principal-top card-ad">
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
        <div className="principal-top-item">
          <h1>Principal</h1>
          <h4><span className='principal-home' onClick={() => navigate('/')}>Home</span>  /  <span className='principal-principal'>Principal</span></h4>
        </div>

      </div>

      <div className="principal-middle">
        <div className="principal-middle-top">
          <div className="principal-middle-menu">

            <div className="chairman-middle-menu-child">
              <h3>Principal</h3>
              <h1>Dr. A.Anto Spiritus Kingsly M.E., Ph.D.,</h1>
              <h2>Principal’s Message:</h2>

              <div className="principal-middle-menu-contact">
                <img className='principal-call-icon' src={call} alt="" /><p>04327-235444</p>
                <img className='principal-mail-icon' src={mail} alt="" /><p>contact@oasys.edu.in</p>
              </div>
            </div>
          </div>
        </div>
        <div className="principal-middle-para">
          <div className="principal-middle-menu-photo">
            <img src={principal} alt="" />
          </div>
          <div className='principal-middle-menu-item'>
            <h1>Welcome to OASYS Institute of Technology!</h1>
            <img src={line} alt="" />
            <p className='principal-para1'>OASYS Institute of Technology is established in the year of 2010 to inculcate excellence in work culture by building confident, competitive and academic ambience to rural students and impart a holistic development environment to develop entrepreneurship qualities in them and train them to emerge as good professionals for early success in industry.         </p><br />
            <p className='principal-para2'> Institutions of higher learning in technical education are the prime interfaces with industry and stakeholders. The joy of learning and exploring is as indispensable in any academic exercise as breathing is to running or as fragrance is to a flower. </p><br />
            <p className='principal-para3'> OASYS Institute of Technology, we provide quality Undergraduate and Post Graduate education with unique teaching strategies in new frontiers of Engineering and Technology with focus towards Leadership & Innovation. It provides platform for the students with professional education and training in Business management and entrepreneurship education to work in urban / rural area in different sectors with ethical and socially responsible individuals. </p><br />
            <p className='principal-para4'> The facility of e-learning, infrastructure, centres of excellence, training and placement with its qualified and dedicated team of faculty at OASYS IT will provide ample opportunities to younger to emphasize personal growth and social upliftment.</p>
            <p>I Wish everyone to have a bright and progressive future!!</p>

            <h1>About Head of Institution</h1>
            <img src={line} alt="" />
            <p>Dr. A.Anto Spiritus Kingsly, Principal, OASYS Institute of Technology is an academician and researcher with a total experience of 20 years. He had his B.E degree in Electronics and Communication Engineering from Manonmanium Sundaranar University, M.E degree in Applied Electronics from Sathyabama University and Ph.D from Anna University, Chennai. He contributed his research work in Medical Image Processing, Speech Processing and Bio Signal Processing. He has 15 publications in International Journals, 10 international conferences, 2 book chapters and 2 Patent Publications. He has guided 2 Ph.Dsas co supervisor. He has extensively coordinated in NBA, NAAC, NIRF and Research and Development activities. He has served as Member of Board of Studies, Subject experts Member, and Doctoral committee member for research programmes.</p>
          </div>
        </div>
      </div>
      <Enquiry />
    </div>
  )
}

export default Principal
