import React from 'react';
import BrowseService from '../components/feature/browseService/browseService';
import CategoriesTabs from '../components/feature/categoriesTabs/categoriesTabs';
import HeroSection from '../components/feature/heroSection/heroSection';
import MovieCategories from '../components/feature/movieCategories/movieCategories';
import Footer from '../components/layout/footer/footer';
import Navbar from '../components/layout/navbar/navbar';

const Home = () => {
    return (
        <div className='app__container'>
           <Navbar />
           <HeroSection />
           <CategoriesTabs />
           <BrowseService />
           <MovieCategories type="Movies"/>
           <MovieCategories type="Series"/>
           <Footer />
        </div>
    );
}

export default Home;
