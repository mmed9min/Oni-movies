import React, { useState } from 'react';

import star from '../../../assets/icons/star.svg'
import play from '../../../assets/icons/play.svg'
import '../movieCard/movieCard.css'
import { Button } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import time from '../../../assets/icons/Frame.svg'
import CardDetail from '../cardDetail/cardDetail';
import { NavLink } from 'react-router-dom';




const MovieCard = (props) => {
    const [hover, setHover] = useState(false);
    const [detail, setDetail] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);


  
    const open = Boolean(anchorEl);
    
    const handleHover = () => {
        setHover(true)
        setDetail(true)
    }
    const handleUnhover = () =>{
         setHover(false)
         setDetail(false)
    }

    return (
        <>
      
        <div className='movieCard cursor-pointer' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <img src={props.movieImg} className="movieCard__img" alt=""  /> 
          {hover && (
            <NavLink className="watch__btn text-center" to="/watch">
              <button className="play__btn flex items-center justify-center">
                <img src={play} width="10px"   alt="" />
              </button>
            </NavLink>
    
          )}
          
          <div className="movieCard__infos mt-2">
              <span className='movieCard__title text-white font-bold'>Jackass Forever</span>
              <div className="movieCard__details flex justify-between items-center mt-1">
                  <span className='movieCard__details__txt text-xs'>2021</span>
                  <span className='movieCard__details__txt text-xs'>1h 31min</span>
                  <span className='flex items-center'><img src={star} width="10px" alt="" /><span className='text-white ml-1 text-xs font-bold'>7.2</span></span>
              </div>
          </div>
          {detail &&(<div className='cardDetails hidden md:block'>
             <CardDetail />
          </div>)}
          
        </div>
 
    
          
  
        </>
    );
}

export default MovieCard;
