import React from 'react';
import { useState } from 'react';
import heroCarImage from '../../../assets/images/heroCard.png'
import star from '../../../assets/icons/star.svg'
import { Button } from '@mui/material';
import likeIcon from '../../../assets/icons/emptyHeart.svg'
import unLikeIcon from '../../../assets/icons/fillHeart.svg'
import '../searchCard/searchCard.css'
import { NavLink } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';


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
        <>
   
          <div className='hidden searchCard flex justify-between py-1'>
          <NavLink  to="/watch">
            <div className='flex'>
               <img src={heroCarImage} className="mr-2 rounded-md" width="55px" height="90px" alt="" />
          
               <div className="searchCard__details grid content-between">
                   <span className='text-white text-sm'>{props.name}</span>
                   <span className='gray__txt text-xs'>1999</span>
                   <span className='gray__txt text-xs'>2h 19min</span>
                   <div className="flex">
                       <span className='text-white text-xs mr-1'>9.1</span>
                       <img src={star} width="10px" alt="" />
                   </div>
               </div>
            </div>
            </NavLink>
            <div>
              {unlike && (<img onClick={handleLike} src={likeIcon} width="12px" alt="" />)}
              {like && (<img onClick={handleUnlike} src={unLikeIcon} width="12px" alt="" />)}
            </div>
              
           </div>



           <div className='searchCard flex justify-between '>
       
            <div className='flex'>
               <Skeleton sx={{ bgcolor: '#605D65' }} className="mr-2 rounded-lg"  variant="rectangular" width={100} height={94} />

        
          
               <div className="searchCard__details grid content-between">
                   <Skeleton sx={{ bgcolor: '#605D65' }} variant="text" width={120} />
                   <Skeleton sx={{ bgcolor: '#605D65' }} variant="text" width={40}/>
                   <Skeleton sx={{ bgcolor: '#605D65' }} variant="text"  width={60}/>
                   <Skeleton sx={{ bgcolor: '#605D65' }} variant="text"  width={40}/>

               </div>
            </div>
        
            <div>
            <Skeleton sx={{ bgcolor: '#605D65' }} variant="text"  width={15}/>
 
            </div>
              
           </div>
       
        </>
      
    );
}

export default SearchCard;
