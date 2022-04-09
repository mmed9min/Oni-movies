import React from 'react';
import heroImage from '../../../assets/images/hero.png'
import heroCardImg from '../../../assets/images/heroCard.png'
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



import '../heroSection/heroSection.css'
import { Button } from '@material-ui/core';
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

const HeroSection = () => {
    const [unlike, setUnlike] = useState(true);
const [like, setLike] = useState(false);

const handleLike = () => {
    setLike(true);
    setUnlike(false)
}
const handleUnlike = ()=>{
    setLike(false);
    setUnlike(true)
}
    return (
        <div className='heroSection    mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12 mt-5'>
            <div className='heroImage'>
               <img  src={heroImage} alt="" />
            </div>
            
            <div className="hero__movie__details ml-3 md:ml-5">
                <div className="hero__movie__infos flex items-center">
                    <div className="hero__movie__rating flex mr-2">
                        <img src={imdp} alt="" className='mr-2  h-5 lg:h-6 2xl:h-10'  />
                        <img src={star} className="mr-1 w-3 md:w-4 2xl:w-6" alt="" />
                        <span className='text-white text-xs md:text-md lg:text-lg 2xl:text-2xl font-medium'>6.7</span>
                    </div>
                    <div className="hero__movie__type mr-3">
                        <span className='text-sm hero__type__txt mr-2 2xl:text-xl'>Adventure</span>
                        <span className='text-sm hero__type__txt 2xl:text-xl'>Sci-fi</span>
                    </div>
                    <div className="hero__movie__time flex items-center">
                        <img src={time} className="w-6 2xl:w-8" alt="" />
                        <span className='text-white text-sm font-medium ml-1 2xl:text-xl'>1h 31 min</span>
                    </div>
                </div>
                <div className="hero__movie__title md:mt-4 md:mb-4">
                    <h1 className='text-lg md:text-2xl lg:text-5xl text-white font-medium 2xl:text-7xl'>The Matrix Resurrections</h1>
                </div>
                <div className="hero__movie__descrip">
                    <p className='text-white text-xs md:text-sm   2xl:text-xl'>Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.</p>
                </div>
                <div className="hero__movie__btns mt-2 md:mt-5 flex ">
                    <Button className='watch__btn mr-2 '><img src={watch} className="mr-2" alt="" /> Watch</Button>
                    {unlike && (
                        <BootstrapTooltip title="Add to watchlist">
                    <Button className='like__btn ml-2'><img src={favoris} onClick={handleLike}   alt="" /></Button>
                    </BootstrapTooltip>)}
                    {like && (<Button className='unLike__btn ml-2'><img src={favorisFill} onClick={handleUnlike}   alt="" /></Button>)}
                </div>
            </div>
            <div className="heroCards__row flex flex-col md:flex-row     justify-between  mt-12 md:mt-0 w-full mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12">
                <div className="heroCards grid grid-cols-8 gap-2 mb-2 md:mb-0 ml-3 md:ml-5 ">
                    <button className='clickImg heroCardImage '>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                    <button className='clickImg heroCardImage '>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                    <button className='clickImg heroCardImage '>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                    <button className='clickImg heroCardImage '>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                    <button className='clickImg heroCardImage '>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                    <button className='clickImg heroCardImage'>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                    <button className='clickImg heroCardImage '>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                    <button className='clickImg heroCardImage '>
                      <img src={heroCardImg}className=" " alt="" />
                    </button>
                  
                </div>
                <div className="hero__social flex items-center justify-between self-end">
                    <span className='text-white text-sm mr-2'>Share :</span>
                    <img className='mr-2 w-4 lg:w-5' src={wtsp} alt="" />
                    <img className='mr-2 w-4 lg:w-5' src={msngr} alt="" />
                    <img className='mr-2 w-4 lg:w-5' src={pint} alt="" />
                    <img className='mr-2 w-4 lg:w-5' src={reddit} alt="" />
                    <img className='mr-2 w-4 lg:w-5' src={fcbk} alt="" />
                    <img className='mr-2 w-4 lg:w-5' src={twitt} alt="" />
                    <Button className='flex items-center copy__btn '><img src={copy} alt="" className='mr-2' /><span>Copy link</span></Button>
                </div>
                
              
            </div>
        </div>
    );
}

export default HeroSection;
