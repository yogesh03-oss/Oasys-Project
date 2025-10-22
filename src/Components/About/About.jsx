import React from "react";
import "./About.css";
import line from "../../assets/line.png";
import top from "../../assets/top.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-right">
        <img src={top} alt="" />
      </div>
      <div className="about-top">
        <h1>BEST ENGINEERING COLLEGE IN TRICHY</h1> <br />
        <img src={line} alt="" /> <br />
        <br />
        <h2>OASYS INSTITUTE OF TECHNOLOGY</h2>
        <br />
        <br />
        <ul>
          <li>
            <p>
              We at OASYS INSTITUTE OF TECHNOLOGY are committed to create
              disciplined and dynamic value based enterprising professionals,
              with global standards through quality education and training.
            </p>
            <br />
          </li>
          <li>
            <p>
              Our intentions are to provide the best of best facilities in-par
              with urban standards to the rural and making them ready with good
              academic standards in par with those in the urban cities and well
              established institutions...
            </p>
          </li>
          <li className="readmore">Read more </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
