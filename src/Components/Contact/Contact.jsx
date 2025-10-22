import React from "react";
import "./Contact.css";
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import line from '../../assets/line.png'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "72a5f931-95e4-4559-86d0-0bf4d5cc938f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>OASYS INSTITUTE</h1>
          <img src={line} alt="" />
         <span>
          We at OASYS Institute of Technology are committed to create disciplined and dynamic value based enterprising professionals, with global standards through quality education and training. Our intentions are to provide..
          </span>


          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" /><p>contact@oasys.edu.in</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="" /><p>+91 84889200481</p>
            </div>
            <div className="contact-detail">
                 <img src={location_icon} alt="" /><p>Trichy-Thuraiyur Main Road, Pulivalam Village, Musiri TK., Trichy, Tamil Nadu - 621006.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter Your Email"/>
            <label htmlFor="">Write Your message here</label>
            <textarea name="message" id="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
