import React from 'react';
import '../../Asset/css/App.css';
import Navbar from '../Micros/Navbar';
import Hero from '../Micros/Hero';
import { hero } from '../../Asset/index';
import Mockup from '../Micros/Mockup'
import Product from '../Micros/Product'
import Footer from '../Micros/Footer';
import Review from '../Micros/Review'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  };

  return (
    <>
    <div className='overflow-hidden bg-[#f6f6f6]'>
      <div style={backgroundStyle} >
        <Navbar />
        <Hero />
      </div>
      <div className="container mx-auto">
        <Mockup/>
      </div>
      <div className="container mx-auto">
        <Product/>
      </div>
      <div className="container mx-auto">
        <Review/>
      </div>

        <Footer/>
      
    </div>
    </>
  );
}

export default App;
