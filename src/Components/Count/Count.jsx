/*
const counts = document.querySelectorAll('.count')
const speed = 300

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target')) 
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})*/
import React, { useEffect, useRef, useState } from 'react';
import './Count.css';
import CountUp from 'react-countup';
import student from '../../assets/student.png';
import location_icon from '../../assets/location1.png';
import education from '../../assets/locaction_files/education.png';
import staff from '../../assets/locaction_files/staff.png';

const Count = () => {
  const countRef = useRef(null);
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = countRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top && top < windowHeight && !counterOn) {
        setCounterOn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [counterOn]);

  return (
    <div ref={countRef} className='count card-ys'>
      <div className="student">
        <img src={student} alt="" />
        <h3>{counterOn && <CountUp end={2340} duration={5} />}</h3>
        <p>Students</p>
      </div>

      <div className="course">
        <img src={education} alt="" />
        <h3>{counterOn && <CountUp end={8} duration={5} />}</h3>
        <p>Course</p>
      </div>

      <div className="staff">
        <img src={staff} alt="" />
        <h3>{counterOn && <CountUp end={113} duration={5} />}</h3>
        <p>Staffs</p>
      </div>

      <div className="location">
        <img src={location_icon} alt="" />
        <h3>{counterOn && <CountUp end={1} duration={5} />}</h3>
        <p>Location</p>
      </div>
    </div>
  );
};

export default Count;

