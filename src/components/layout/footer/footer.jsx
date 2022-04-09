import React from 'react';
import '../footer/footer.css'
import logo from '../../../assets/icons/nav__logo.svg'
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer'>
        <div className=' mx-auto px-4 sm:px-6 py-4 lg:px-14 2xl:px-12 mt-10 grid content-between'>
            <img src={logo} className="w-30" alt="" />
            <div className="footer__content flex  flex-col md:flex-row justify-between mt-5">
                <p className='footer__txt text-white text-sm lg:w-1/2 2xl:text-lg'>Oni provides more than 50,000 titles more than any sites active today. 
                 Our main focus is making your viewing experience better and bringing the best of entertainment industry has to offer.
                 </p>
                 <div className="footer__menu mt-5">
               
                <div className=" lg:ml-10 flex items-baseline space-x-1 md:space-x-4">
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-xs sm:text-sm font-medium 2xl:text-lg"
                  >
                  Contact
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-xs sm:text-sm font-medium 2xl:text-lg"
                  >
                    Channel
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-1 py-2 rounded-md text-xs sm:text-sm font-medium 2xl:text-lg"
                  >
                    Movies
                  </a>
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-xs sm:text-sm font-medium 2xl:text-lg"
                  >
                   Anime
                  </a>
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-xs sm:text-sm font-medium 2xl:text-lg"
                  >
                    Bollywood
                  </a>
                 
                  <Button className='donate__btn'>Donate</Button>
                   </div>
                 </div>
            </div>
            <div className="footer__content flex  md:justify-between mt-10 flex-col md:flex-row">
                <p className='footer__txt text-sm gray__txt md:w-1/2 mr-2 md:self-end mb-1 md:mb-0 2xl:text-lg'>
                   2022 Copyright © Oni. All Rights Reserved
                 </p>
                 <p className='footer__txt text-xs  text-white 2xl:text-sm'>
                 Note : This site does not store any files on our server, we are only linked to the 3rd party services which provide them.
                 </p>
            </div>
        </div>
        </div>
    );
}

export default Footer;
