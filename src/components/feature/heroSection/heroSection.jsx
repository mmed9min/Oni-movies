import React from 'react';
import heroImage from '../../../assets/images/hero.png'
import heroCardImg from '../../../assets/images/heroCard.png'
import heroCardImg3 from '../../../assets/images/catchMeCard.jpg'
import heroCardImg1 from '../../../assets/images/matrix.jpg'
import heroCardImg2 from '../../../assets/images/godfatherCard.jpg'

import star from '../../../assets/icons/star.svg'
import imdp from '../../../assets/icons/imdp.png'
import time from '../../../assets/icons/Frame.svg'
import hd from '../../../assets/icons/hd.png'
import watch from '../../../assets/icons/Vector1.svg'
import favoris from '../../../assets/icons/Vector2.svg'
import favorisFill from '../../../assets/icons/likeFill.svg'
import wtsp from '../../../assets/icons/wtsp.svg'
import msngr from '../../../assets/icons/msngr.svg'
import pint from '../../../assets/icons/pint.svg'
import reddit from '../../../assets/icons/reddit.svg'
import fcbk from '../../../assets/icons/fcbk.svg'
import twitt from '../../../assets/icons/twit.svg'
import copy from '../../../assets/icons/copy.svg'
import { useState } from 'react';
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import '../heroSection/heroSection.css'
import { Button } from '@material-ui/core';
import MovieHeroDetail from '../movieHeroDetail/movieHeroDetail';

import heroImage2 from '../../../assets/images/godfather.jpg'
import heroImage3 from '../../../assets/images/catchMe.jpg'
import Slideshow from '../mobileSlideShow/mobileSlideShow';


const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  cursor: pointer;
  border-radius: 5px;




  &:focus {
    color: #fff;
    border-radius: 5px ;
    outline: none;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    border : 2px solid #782CE8;
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width : 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  display: flex;
`;

const TabsList = styled(TabsListUnstyled)` 
  width:50%;
  margin-bottom: 16px;
  display: flex;
  justify-content : flex-start;

`;


const HeroSection = () => {

const [value, setValue] = React.useState('1');

const handleChange = (event, newValue) => {
  setValue(newValue);
};


    return (
        <div className='heroSection   mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12 mt-5'>
    
   
            <TabsUnstyled className='hidden md:block' defaultValue={0}>
              <TabsList className='tablist heroCards grid grid-cols-8 gap-2 mb-2 md:mb-0 ml-3 md:ml-5'>
  
                  <Tab className='heroCardImage__cont'>
                   
                      <img className="heroCardImage" src={heroCardImg1} alt="" />
                   
                  </Tab>
                  <Tab className='heroCardImage__cont'>
                   
                   <img className="heroCardImage" src={heroCardImg2} alt="" />
                
               </Tab>
               <Tab className='heroCardImage__cont'>
                   
                   <img className="heroCardImage" src={heroCardImg3} alt="" />
                
               </Tab>
               <Tab className='heroCardImage__cont'>
                   
                   <img className="heroCardImage" src={heroCardImg} alt="" />
                
               </Tab>
               <Tab className='heroCardImage__cont'>
                   
                   <img className="heroCardImage" src={heroCardImg} alt="" />
                
               </Tab>
               <Tab className='heroCardImage__cont'>
                   
                   <img className="heroCardImage" src={heroCardImg} alt="" />
                
               </Tab>
               <Tab className='heroCardImage__cont'>
                   
                   <img className="heroCardImage" src={heroCardImg} alt="" />
                
               </Tab>
               <Tab className='heroCardImage__cont'>
                   
                   <img className="heroCardImage" src={heroCardImg} alt="" />
                
               </Tab>
           
      
                  
               
        
              </TabsList>
             
              <TabPanel value={0}>
                 <MovieHeroDetail
                  image={heroImage}
                  title="The Matrix Resurrections "
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="1h 31 min"
                  rating="6.7"
                  type={["Adventure", "Sci-fi"]}
                />
               </TabPanel>
               <TabPanel value={1}>
                <MovieHeroDetail
                  image={heroImage2}
                  title="The Godfather"
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="2h 04 min"
                  rating="8.5"
                  type={["Action", "Drama"]}
                />
               </TabPanel>
               <TabPanel value={2}>
                <MovieHeroDetail
                  image={heroImage3}
                  title="Catch me if you can"
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="2h 04 min"
                  rating="8.2"
                  type={["Action", "Adventure", "Drama"]}
                />
               </TabPanel>
               <TabPanel value={3}>
                <MovieHeroDetail
                  image={heroImage}
                  title="The Godfather"
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="2h 04 min"
                  rating="8.5"
                  type={["Action", "Drama"]}
                />
               </TabPanel>
               <TabPanel value={4}>
                <MovieHeroDetail
                  image={heroImage}
                  title="The Godfather"
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="2h 04 min"
                  rating="8.5"
                  type={["Action", "Drama"]}
                />
               </TabPanel>
               <TabPanel value={5}>
                <MovieHeroDetail
                  image={heroImage}
                  title="The Godfather"
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="2h 04 min"
                  rating="8.5"
                  type={["Action", "Drama"]}
                />
               </TabPanel>
               <TabPanel value={6}>
                <MovieHeroDetail
                  image={heroImage}
                  title="The Godfather"
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="2h 04 min"
                  rating="8.5"
                  type={["Action", "Drama"]}
                />
               </TabPanel>
               <TabPanel value={7}>
                <MovieHeroDetail
                  image={heroImage}
                  title="The Godfather"
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="2h 04 min"
                  rating="8.5"
                  type={["Action", "Drama"]}
                />
               </TabPanel>
              
            </TabsUnstyled>
            <div className='block md:hidden'>
              <Slideshow />
              <div className="hero__social flex items-center justify-between w-full mt-5">
                       <span className='text-white text-sm mr-2 whitespace-nowrap'>Share :</span>
                       <img className='mr-2 w-5 lg:w-5' src={wtsp} alt="" />
                       <img className='mr-2 w-5 lg:w-5' src={msngr} alt="" />
                       <img className='mr-2 w-5 lg:w-5' src={pint} alt="" />
                       <img className='mr-2 w-5 lg:w-5' src={reddit} alt="" />
                       <img className='mr-2 w-5 lg:w-5' src={fcbk} alt="" />
                       <img className='mr-2 w-5 lg:w-5' src={twitt} alt="" />
                    <Button className='flex items-center copy__btn '><img src={copy} alt="" className='mr-2' /><span>Copy link</span></Button>
              </div>
            </div>
          
        </div>
    );
}

export default HeroSection;
