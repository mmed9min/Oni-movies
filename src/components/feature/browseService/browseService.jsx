import React from 'react';
import netflix from '../../../assets/images/netflix.png'
import prime from '../../../assets/images/prime.png'
import disney from '../../../assets/images/disney.png'
import apple from '../../../assets/images/apple.png'
import hulu from '../../../assets/images/hulu.png'
import hbo from '../../../assets/images/hbo.png'
import peacecock from '../../../assets/images/peacock.png'
import funimation from '../../../assets/images/funimation.png'
import ServiceCard from '../serviceCard/serviceCard';
import { Button } from '@mui/material';
import ItemsCarousel from '../ItemsCarousel/itemsCarousel';

const BrowseService = () => {
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12 mt-7 borwseService'>
           <span className='text-white text-xl font-bold'>Browse by service</span> 
           <div className='hidden md:grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-2  2xl:gap-4 mt-4'>
               <ServiceCard img={netflix} name ="Netflix"/>
               <ServiceCard img={prime} name ="Prime video"/>
               <ServiceCard img={disney} name ="Disnep +"/>
               <ServiceCard img={apple} name ="Apple TV"/>
               <ServiceCard img={hulu} name ="Hulu"/>
               <ServiceCard img={hbo} name ="Hbo MAX"/>
               <ServiceCard img={peacecock} name ="Peacock"/>
               <ServiceCard img={funimation} name ="Funimation"/>
               <Button className='viewAll__btn'>View all services →</Button>
           </div>
           <div className='md:hidden mt-3'>
               <ItemsCarousel services />
           </div>
        </div>
    );
}

export default BrowseService;
