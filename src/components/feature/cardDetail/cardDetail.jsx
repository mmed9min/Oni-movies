import React from 'react';
import time from '../../../assets/icons/Frame.svg'
import star from '../../../assets/icons/star.svg'

import { Button } from '@material-ui/core';
import watch from '../../../assets/icons/Vector1.svg'
import favoris from '../../../assets/icons/Vector2.svg'
import favorisFill from '../../../assets/icons/likeFill.svg'


import { useState } from 'react';
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import '../cardDetail/cardDetail.css'
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';

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

const CardDetail = () => {
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
        <div className='cardDetail'>
        
        <div className=''>
        <div className=" flex justify-between">
             <span className='text-white text-lg'>The Batman</span>
             <div className="flex items-center">
                 <img className='mr-1' src={star} alt="" />
                 <span className='text-white text-xs'>9.1</span>
             </div>
         </div>
         <div className="flex mt-3">
             <span className='gray__txt mr-3 text-xs'>2022</span>
             <img src={time} width="15px" alt="" />
             <span className='text-white ml-1 text-xs'>1h 31 min</span>
         </div>
         <div className="grid grid-cols-4 gap-2 mt-3">
             <span className='gray__txt text-xs'>Action</span>
             <span className='gray__txt text-xs'>Action</span>
             <span className='gray__txt text-xs'>Adventure</span>
         </div>
         <div className="cardDetail__descrip mt-3">
             <p className='text-xs text-white'>
             When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
             </p>
         </div>
         <div className="cardDetail__btns flex items-center w-full mt-6 ">
         <NavLink className="watch__btn text-center watchDetail" to="/watch">
            <Button className='wtch__btn mr-2 flex items-center'><img src={watch} className="mr-2" alt="" /> Watch</Button>
        </NavLink>
        
            {unlike && (
                <BootstrapTooltip title="Add to watchlist">
            <Button className='like__btn likeDetail ml-2'><img src={favoris} onClick={handleLike}   alt="" /></Button>
            </BootstrapTooltip>)}
            {like && (<Button className='unLike__btn likeDetail ml-2'><img src={favorisFill} onClick={handleUnlike}   alt="" /></Button>)}
         </div>
        </div>
       



     <div className='hidden'>
        <div className="flex justify-between">
               <Skeleton sx={{ bgcolor: '#605D65' }} variant="text" width={120} height={30} />
               
               <Skeleton sx={{ bgcolor: '#605D65' }} variant="text" width={15} />
         </div>
         <Skeleton sx={{ bgcolor: '#605D65' }} variant="text" width={120} />
         <Skeleton sx={{ bgcolor: '#605D65' }} variant="text"  />
         <Skeleton sx={{ bgcolor: '#605D65' }}   variant="text"  className='card__skeleton' />
         <div className="cardDetail__btns  flex items-center mt-6">
         <NavLink className="watch__btn text-center watchDetail" to="/watch">
            <Button className='wtch__btn mr-2 flex items-center'><img src={watch} className="mr-2" alt="" /> Watch</Button>
        </NavLink>
        
            {unlike && (
                <BootstrapTooltip title="Add to watchlist">
            <Button className='like__btn likeDetail ml-2'><img src={favoris} onClick={handleLike}   alt="" /></Button>
            </BootstrapTooltip>)}
            {like && (<Button className='unLike__btn likeDetail ml-2'><img src={favorisFill} onClick={handleUnlike}   alt="" /></Button>)}
         </div>
     </div>
     
    </div>
    );
}

export default CardDetail;
