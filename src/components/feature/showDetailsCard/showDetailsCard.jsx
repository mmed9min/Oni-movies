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




const ShowDetailsCard = () => {
    return (
        <div className='flex showDetailsCard p-3'>
            <div className='flex flex-col items-start showCard__first'>
               <img src={heroCardImg} className="flex w-full" alt="" />
               
               <Button className='showCard__btn watchList__btn'>
                   <img src={favoris} width="15px" className="mr-2" alt="" />
                   Add to watchlist
                   </Button>
               <Button className='showCard__btn trailer__btn'>
                   <img src={camera} width="15px"  className="mr-2" alt="" />
                   Watch trailer
                </Button>
            </div>
            <div className="flex flex-col px-3 showCard__sec">
                <span className='text-white text-xl 2xl:text-3xl'>The Matrix Resurrections</span>
                <div className="flex items-center mt-2">
                    <img src={imdp} width="50px" className='mr-2' alt="" />
                    <div className="flex items-center mr-2">
                      <img src={star} className="mr-1" width="15px" alt="" />
                      <span className='text-white text-sm'>6.5</span>
                    </div>
                    <span className='gray__txt text-xs 2xl:text-sm mr-2'>2022</span>
                    <div className="flex items-center">
                      <img src={clock} alt="" width="18px" className='mr-1'/>
                      <span className='text-white text-sm 2xl:text-sm'>1h 31 min</span>
                    </div>
                </div>
                <div className="showDescription mt-6">
                        <p className="gray__txt text-xs 2xl:text-sm">
                        Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once... more↓
                        </p>
                </div>
                <div className="showType flex mt-2">
                    <span className='text-white text-xs mr-2 2xl:text-sm'>Adventure</span>
                    <span className='text-white text-xs mr-2 2xl:text-sm'>Adventure</span>
                    <span className='text-white text-xs mr-2 2xl:text-sm'>Adventure</span>
                </div>
                <div className="director mt-1">
                    <span className='gray__txt text-xs mr-1 font-bold 2xl:text-sm'>Director:</span>
                    <span className='text-white text-xs 2xl:text-sm'>Lana Wachowski</span>
                </div>
                <div className="director mt-1">
                    <span className='gray__txt text-xs mr-1 font-bold 2xl:text-sm'>Cast:</span>
                    <span className='text-white text-xs 2xl:text-sm '>
                    Keanu Reeves, Laurance Fishburn,Jessica Henwick, Carrie-anne Moss, Priyanka Chopra, Christin Ricchi, Jonathan Groff
                    </span>
                </div>
                <div className="director mt-1">
                    <span className='gray__txt text-xs mr-1 font-bold 2xl:text-sm'>Tags:</span>
                    <span className='text-white text-xs  2xl:text-sm'>
                    #watch the matrix resurrections free, #watch the matrix #resurrections hd, #the matrix resurrections online, #where to #watch the matrix resurrections, #the matrix resurrections free online, #neo noir, #cyberpunk, #fourth part, #tech noir, #the matrix resurrections, #part of series
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ShowDetailsCard;
