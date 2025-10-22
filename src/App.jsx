
import {Route, Routes } from 'react-router-dom';
import Feed from './Feed/Feed';
import Navbar from './Components/Navbar/Navbar';
import Chairman from './Administration/Chairman/Chairman';
import Gallary from './Gallary/Gallary';
import Footer from './Components/Footer/Footer';
import Director from './Administration/Director/Director';
import Principal from './Administration/principal/Principal';
import UG from './Courses/UG/UG';
import PG from './Courses/PG/PG';
import Contact from './Contact/Contact';
import AboutUS from './About US/AboutUS';





const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/Gallary' element={<Gallary />} />
        <Route path='/Chairman' element={<Chairman />} />
        <Route path='/Director' element={<Director />} />
        <Route path='/Principal' element={<Principal />} />
        <Route path='/UG' element={<UG />} />
        <Route path='/PG' element={<PG />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<AboutUS />} />

      </Routes> 
      <Footer />
    </div>
  )
}

export default App;