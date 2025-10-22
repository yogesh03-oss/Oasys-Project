import React from 'react'
import Hero from '../Components/Hero/Hero';
import Dept from '../Components/Dept/Dept';
import Need from '../Components/Need/Need';
import Count from '../Components/Count/Count';
import Details from '../Components/Details/Details';
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About';


const Feed = () => {
  return (
    <div>
       <Hero />
      { /*<Dept />*/}
       <Need />
       <About />
       <Count />
       <Details />
       <Contact />
    </div>
  )
}

export default Feed;
