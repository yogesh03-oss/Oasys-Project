import React from 'react'
import './Dept.css'

import dept_data from '../../assets/dept_data'


const Dept = () => {

  
  return (
    <div className="total">
      

    <div className='dept'>
      <div className="dept-container">
      {dept_data.map((services, index) => {
          return (
            <div key={index} className="dept-format">
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
             
              </div>
           
          );
        })}
      </div>
        
    </div>
    </div>
  )
}

export default Dept;