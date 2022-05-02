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
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right-start" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#413F45',
    height: "392px",
    maxWidth: "320px",
    position : "relative",
    margin : 0,

  },
  tooltipPlacementLeft: {
    margin: '0',
},

}));


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
        <div>
      <HtmlTooltip className="hidden md:block mt-10"
      onMouseEnter={handleHover} onMouseLeave={handleUnhover}
        title={
          <React.Fragment>
            <Typography color="inherit"  onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          
            <CardDetail />
            </Typography>
        
          </React.Fragment>
        }
      >
        
        
         <div className='movieCard cursor-pointer mb-6 ' >
           <div className='movieOverlay'>
           {hover && (
            <NavLink className="watch__btn text-center" to="/watch">
              <button className="play__btn flex items-center justify-center">
                <img src={play} width="16px"   alt="" />
              </button>
            </NavLink>
    
          )}
          <div>
          <img src={props.movieImg} className="movieCard__img relative" alt=""  />
          {props.resolution &&(<span className='absolute top-3 left-3 resolution__badge'>{props.resolution}</span>)}
          </div>
             
           </div>
           
        
          
          <div className="movieCard__infos mt-2">
              <span className='movieCard__title text-white font-bold'>Jackass Forever</span>
              <div className="movieCard__details flex justify-between items-center mt-1">
                  {props.series && (<span className='movieCard__details__txt tvBdg text-xs'>TV</span>)}
                  {!props.series && (<span className='movieCard__details__txt text-xs font-bold'>2021</span>)}
                  {props.series && (<span className='movieCard__details__txt text-xs font-bold'>S3 · Ep 21</span>)}
                  {!props.series && (<span className='movieCard__details__txt text-xs font-bold'>1h 31min</span>)}
                  <span className='flex items-center'><img src={star} width="10px" alt="" /><span className='text-white ml-1 text-xs font-bold'>7.2</span></span>
              </div>
          </div>
          {/* {detail &&(<div className='cardDetails hidden md:block'>
             <CardDetail />
          </div>)} */}
          
        </div>
      </HtmlTooltip>
       
 
      <div className='movieCard cursor-pointer md:hidden'   onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
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
                  {props.series && (<span className='movieCard__details__txt tvBdg text-xs'>TV</span>)}
                  {!props.series && (<span className='movieCard__details__txt text-xs'>2021</span>)}
                  {props.series && (<span className='movieCard__details__txt text-xs'>S3 · Ep 21</span>)}
                  {!props.series && (<span className='movieCard__details__txt text-xs'>1h 31min</span>)}
                  <span className='flex items-center'><img src={star} width="10px" alt="" /><span className='text-white ml-1 text-xs font-bold'>7.2</span></span>
              </div>
          </div>
          
  
        </div>
        </div>
    );
}

export default MovieCard;
