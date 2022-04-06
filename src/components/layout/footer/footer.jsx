import React from 'react';
import '../footer/footer.css'
import logo from '../../../assets/icons/nav__logo.svg'
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-10 mt-10 grid content-between'>
            <img src={logo} width="60px" alt="" />
            <div className="footer__content flex justify-between mt-5">
                <p className='footer__txt text-white text-sm'>Oni provides more than 50,000 titles more than any sites active today. 
                 Our main focus is making your viewing experience better and bringing the best of entertainment industry has to offer.
                 </p>
                 <div className="footer__menu">
               
                <div className="ml-5 lg:ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                  Contact
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                    Channel
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                    Movies
                  </a>
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                   Anime
                  </a>
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                    Bollywood
                  </a>
                 
                  <Button className='donate__btn'>Donate</Button>
                   </div>
                 </div>
            </div>
            <div className="footer__content flex justify-between mt-10">
                <p className='footer__txt text-sm gray__txt'>
                   2022 Copyright © Oni. All Rights Reserved
                 </p>
                 <p className='footer__txt text-xs whitespace-nowrap text-white'>
                 Note : This site does not store any files on our server, we are only linked to the 3rd party services which provide them.
                 </p>
            </div>
        </div>
        </div>
    );
}

export default Footer;
