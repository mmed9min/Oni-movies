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
   
          <div className=' searchCard flex justify-between py-1'>
          <NavLink  to="/watch">
            <div className='flex'>
               <img src={heroCarImage} className="mr-2 rounded-md searchCard__img "  alt="" />
          
               <div className="searchCard__details grid content-between searchCard__txt">
                   <span className='text-white text-xl searchCard__txt'>{props.name}</span>
                   <span className='gray__txt text-lg searchCard__txt'>1999</span>
                   <span className='gray__txt text-lg searchCard__txt'>2h 19min</span>
                   <div className="flex">
                       <span className='text-white text-lg mr-1 searchCard__txt'>9.1</span>
                       <img src={star}  alt="" />
                   </div>
               </div>
            </div>
            </NavLink>
            <div>
              {unlike && (<img onClick={handleLike} src={likeIcon} width="18px" alt="" />)}
              {like && (<img onClick={handleUnlike} src={unLikeIcon} width="18px" alt="" />)}
            </div>
              
           </div>



           <div className='hidden searchCard flex justify-between '>
       
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
