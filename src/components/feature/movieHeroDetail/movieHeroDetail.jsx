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


import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import '../heroSection/heroSection.css'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';





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




const MovieHeroDetail = (props) => {

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
        <div>
                <div className='heroImage heroImage__shadow relative'>
                  <img className='' src={props.image} alt="" />
               </div>
               
               <div className="hero__movie__details ml-3 md:ml-5">
                   <div className="hero__movie__infos flex flex-col md:flex-row md:items-center">
                      
                       <div className="hero__movie__rating flex mr-2 mb-1 md:mb-0 items-center">
                           <img src={imdp} alt="" className='mr-2  h-5 md:h-6 2xl:h-10'  />
                           <img src={star} className="mr-1 w-4 md:w-4 2xl:w-6" alt="" />
                           <span className='text-white text-xs md:text-md md:text-lg 2xl:text-2xl font-bold '>{props.rating}</span>
                       </div>
                       <div className="hero__movie__type mr-3 mb-1 md:mb-0">
                           {props.type.map((type)=> <span className='text-sm hero__type__txt mr-2 2xl:text-xl font-bold'>{type}</span>)}
                       </div>
                       <div className="hero__movie__time flex items-center mb-1 md:mb-0">
                           <img src={time} className="w-4 md:w-6 2xl:w-8" alt="" />
                           <span className='text-white text-sm font-bold ml-1 2xl:text-xl'>{props.duration}</span>
                       </div>
                   </div>
                   <div className="hero__movie__title md:mt-4 mb-1  md:mb-4 flex items-start">
                       <h1 className='text-lg md:text-2xl md:text-5xl text-white font-bold 2xl:text-7xl'>{props.title}</h1>
                       {props.resolution &&(<span className='resolution__badge self-end mb-2 ml-4'>{props.resolution}</span>)}
                   </div>
                   <div className="hero__movie__descrip hidden md:block">
                       <p className='text-white text-xs md:text-sm   2xl:text-xl'>{props.description}</p>
                   </div>
                   <div className="hero__movie__btns mt-2 md:mt-5 flex ">
                         <NavLink className="watch__btn text-center" to="/watch">
                         <Button className='wtch__btn mr-2 '><img src={watch} className="mr-2" alt="" /> Watch</Button>
                        </NavLink>
                       {unlike && (
                           <BootstrapTooltip title="Add to watchlist">
                       <Button className='like__btn ml-2'><img src={favoris} onClick={handleLike}   alt="" /></Button>
                       </BootstrapTooltip>)}
                       {like && (<Button className='unLike__btn ml-2'><img src={favorisFill} onClick={handleUnlike}   alt="" /></Button>)}
                   </div>
               </div> 
        </div>
    );
}

export default MovieHeroDetail;
