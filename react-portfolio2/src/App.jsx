import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import About from './Components/About/About';
// import Services from './Components/Services/Services';
// import MyWork from './Components/MyWork/MyWork';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import WorkSlider from './Components/WorkSlider/WorkSlider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Photos from './pages/Photos';

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <About />
      <WorkSlider />
      <Contact />
      <Footer /> */}
      {/* <Services /> */}
      {/* <MyWork /> */}

      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />}/>
          <Route path="/resume/*" element={<Resume />}/>
          <Route path="/photos/*" element={<Photos />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;

