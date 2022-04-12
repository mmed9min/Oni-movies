import React from 'react';
import ShowDetailsCard from '../components/feature/showDetailsCard/showDetailsCard';
import SimilairCard from '../components/feature/similairCards/similairCard';
import WatchSection from '../components/feature/watchSection/watchSection';

import Footer from '../components/layout/footer/footer';
import Navbar from '../components/layout/navbar/navbar';

const WatchPage = () => {
    return (
        <div className='app__container '>
           <Navbar />
           <WatchSection />
           <div className="grid lg:grid-cols-2 gap-3 mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12 mt-5">
               <div className="content__section">
                   <ShowDetailsCard />
                   <SimilairCard />
               </div>
               <div className="comments__section">

               </div>
           </div>
           <Footer />
        </div>
    );
}

export default WatchPage;
