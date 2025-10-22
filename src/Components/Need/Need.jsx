import React from 'react'
import './Need.css'
import line from '../../assets/line.png'

const Need = () => {
  return (
    <div className='need'>
        <div className="need-head">
        <h1>OASYS Admission CRITERIA</h1>
        <img src={line} alt="" />
        </div>
        <div className="need-bottom">
            <h2>Indian Nationals</h2>
            <img src={line} alt="" />
            <p>For Entry you need a pass in +2 (Hsc) or its equivalent exam, with the following % of average in the subjects of Mathematics, Physics & Chemistry.</p>
            <br /><br />
            <ul>
                <li>General Category (DC) - 50%</li><br />
                <li> Backward Caste (including BC Muslim) - 45%</li><br />
                <li> Most Backward Community (MBC) & Denotified Community (DNC) - 40%</li><br />
                <li>Schedule Cast (SC) / Scheduled Caste Arunthathiyar (SCA) / Schedule Tribe (ST)- 40%* clinics.</li>
            </ul><br /><br /><br /><br /><br />
        </div>

    </div>
  )
}

export default Need