import React from 'react'
import './Navbar.css'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-top">
        <h3 className='aicte'>AICTE</h3>
        <h3 className='center'>CENTER/CELL</h3>
        <h3 className='coe'>CoE</h3>
        <h3 className='aishe'>AISHE</h3>
        <h3 className='ariia'>ARIIA</h3>
        <h3 className='nirf'>NIRF</h3>
        <h3 className='nisp'>NISP</h3>
        <h3 className='yukti'>YUKTI</h3>
        <h3 className='kapila'>KAPILA</h3>
        <h3 className='iic'>IIC</h3>
        <h3 className='iqac'>IQAC</h3>
        <h3 className='student'>Students Corner</h3>
      </div> 
      <div className="nav-bottom">
        <div className="num1">
          <h4>Counselling Code : 3782</h4>
        </div>

        <div className="num2">
          <h4>Approved by AICTE & Affiliated to Anna University – Chennai</h4>
        </div>

        <div className="num3">
          <img src={call} alt="" />
          <h4>Help Desk : Mrs.Menaga 95512 18000</h4>
        </div>

        <div className="num4">
          <img src={mail} alt="" /> 
          <h4>contact@oasys.edu.in</h4>
        </div>
       
      </div>

      <section className='Hero'>
            
            

      </section>
     
    </div>
    
  )
}

export default Navbar

