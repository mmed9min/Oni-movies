import React from 'react';
import { useState } from 'react';
import heroCarImage from '../../../assets/images/heroCard.png'
import star from '../../../assets/icons/star.svg'
import { Button } from '@mui/material';
import likeIcon from '../../../assets/icons/emptyHeart.svg'
import unLikeIcon from '../../../assets/icons/fillHeart.svg'
import '../searchCard/searchCard.css'
const SearchCard = (props) => {
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
        
          <div className='searchCard flex justify-between py-1'>
            <div className='flex'>
               <img src={heroCarImage} className="mr-2 rounded-md" width="55px" height="90px" alt="" />
          
               <div className="searchCard__details grid content-between">
                   <span className='text-white text-sm'>{props.name}</span>
                   <span className='gray__txt text-xs'>1999</span>
                   <span className='gray__txt text-xs'>2h 19min</span>
                   <div className="flex">
                       <span className='text-white text-xs mr-1'>9.1</span>
                       <img src={star} width="12px" alt="" />
                   </div>
               </div>
            </div>
            <div>
              {unlike && (<img onClick={handleLike} src={likeIcon} width="12px" alt="" />)}
              {like && (<img onClick={handleUnlike} src={unLikeIcon} width="12px" alt="" />)}
            </div>
              
           </div>
      
    );
}

export default SearchCard;
