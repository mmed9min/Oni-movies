import React from 'react';
import HeroSection from '../components/feature/heroSection';
import Navbar from '../components/layout/navbar';

const Home = () => {
    return (
        <div className='app__container'>
           <Navbar />
           <HeroSection />
        </div>
    );
}

export default Home;
