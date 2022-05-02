import { Button } from '@mui/material';
import React from 'react';
import heroCardImg from '../../../assets/images/heroCard.png'
import '../showDetailsCard/showDetailsCard.css'
import favoris from '../../../assets/icons/Vector2.svg'
import favorisFill from '../../../assets/icons/likeFill.svg'
import camera from '../../../assets/icons/trailer.svg'
import imdp from '../../../assets/icons/imdp.png'
import star from '../../../assets/icons/star.svg'
import clock from '../../../assets/icons/Frame.svg'

import { useState } from 'react';


const ShowDetailsCard = () => {
    
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
        <div className='flex  showDetailsCard p-1 py-2 xs:p-3 flex-col  xs:flex-row items-center xs:items-start'>
            <div className='flex flex-col justify-center  xs:justify-start xs:items-start showCard__first mb-3 hidden sm:block'>
               <img src={heroCardImg} className="flex w-full showImg" alt="" />
               {unlike && (
               <Button className='showCard__btn watchList__btn' onClick={handleLike}>
              <img src={favoris} width="18px" className="mr-2" alt="" />
            
                   Add to watchlist
                </Button>)}
                {like && (
               <Button className='showCard__btn watchList__btn inWatch' onClick={handleUnlike}>
              <img src={favorisFill} width="18px" className="mr-2" alt="" />
            
                   In watchlist
                </Button>)}
               <Button className='showCard__btn trailer__btn'>
                   <img src={camera} width="18px"  className="mr-2" alt="" />
                   Watch trailer
                </Button>
            </div>
            <div className="flex flex-col py-1 pl-4 pr-2 showCard__sec">
                <span className='text-white text-2xl 2xl:text-2xl font-bold tracking-wider'>The Matrix Resurrections</span>
                <div className="flex items-center mt-2">
                    <img src={imdp} width="64px" className='mr-2' alt="" />
                    <div className="flex items-center mr-5">
                      <img src={star} className="mr-1" width="16px" alt="" />
                      <span className='text-white text-md font-bold'>6.5</span>
                    </div>
                    <span className='gray__txt text-md mr-5 font-bold'>2022</span>
                    <div className="flex items-center">
                      <img src={clock} alt="" width="20px" className='mr-1'/>
                      <span className='text-white text-sm 2xl:text-md font-bold'>1h 31 min</span>
                    </div>
                </div>
                <div className="showDescription mt-6">
                        <p className="gray__txt text-md 2xl:text-md font-bold">
                        Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once... more↓
                        </p>
                </div>
                <div className="showType flex mt-2">
                    <span className='text-white text-md mr-2 font-bold'>Adventure</span>
                    <span className='text-white text-md mr-2 font-bold'>Adventure</span>
                    <span className='text-white text-md mr-2 font-bold'>Adventure</span>
                </div>
                <div className="director mt-1 flex">
                    <span className='gray__txt text-md mr-1 font-bold'>Director:</span>
                    <span className='text-white text-md font-bold'>Lana Wachowski</span>
                </div>
                <div className="director mt-1 flex">
                    <span className='gray__txt text-md mr-1 font-bold '>Cast:</span>
                    <span className='text-white text-md font-bold'>
                    Keanu Reeves, Laurance Fishburn,Jessica Henwick, Carrie-anne Moss, Priyanka Chopra, Christin Ricchi, Jonathan Groff
                    </span>
                </div>
                <div className="director mt-1 flex">
                    <span className='gray__txt text-md mr-1 font-bold'>Tags:</span>
                    <span className='text-white text-md font-bold'>
                    #watch the matrix resurrections free, #watch the matrix #resurrections hd, #the matrix resurrections online, #where to #watch the matrix resurrections, #the matrix resurrections free online, #neo noir, #cyberpunk, #fourth part, #tech noir, #the matrix resurrections, #part of series
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ShowDetailsCard;
