import React from "react";
import "./Apply.css";
import yo from "../../assets/scholarship.jpg";

const Apply = () => {
  return (
    <div className="apply card-ha">
      <div className="apply-top">
        <h1>
          COMPETENT <span>PROFESSIONALS</span>
        </h1>

        <p>
          Oasys Engineering College is committed to becoming a distinguished
          institution recognized for producing highly skilled, innovative, and
          responsible engineers who contribute to the advancement of society and
          the nation. We strive to deliver a world-class educational experience
          that combines strong theoretical foundations with hands-on practical
          training. Our goal is to nurture critical thinking, problem-solving
          abilities, and a passion for lifelong learning among our students,
          preparing them to excel in a rapidly evolving technological landscape.
        </p>
        <p>
          At Oasys, we believe that education goes beyond the classroom. We
          foster a dynamic and inclusive learning environment where students are
          encouraged to explore, create, and lead. Through modern
          infrastructure, industry partnerships, experienced faculty, and a
          focus on research and innovation, we empower our students to become
          confident professionals and ethical leaders. Guided by a vision of
          excellence and a commitment to national development, Oasys Engineering
          College is shaping the engineers of tomorrow.
        </p>
        <div className="link">
          <a href="https://admission.oasys.edu.in/college/be/5/">
            APPLY ONLINE
          </a>

          <a href="https://oasys.edu.in/">CAMPUS TOUR</a>
        </div>
     
      <div className="apply-bottom">
        <img src={yo} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Apply;
