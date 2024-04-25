import { React } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import WorkSlider from '../Components/WorkSlider/WorkSlider';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <WorkSlider />
    <Contact />
    <Footer />
    </>
  )
}

export default Home;