import React from 'react';

import star from '../../../assets/icons/star.svg'
import '../movieCard/movieCard.css'
const MovieCard = (props) => {
    return (
        <div className='movieCard'>
          <img src={props.movieImg} alt="" /> 
          <div className="movieCard__infos mt-2">
              <span className='movieCard__title text-white font-bold'>Jackass Forever</span>
              <div className="movieCard__details flex justify-between items-center mt-1">
                  <span className='movieCard__details__txt text-xs'>2021</span>
                  <span className='movieCard__details__txt text-xs'>1h 31min</span>
                  <span className='flex items-center'><img src={star} width="10px" alt="" /><span className='text-white ml-1 text-xs font-bold'>7.2</span></span>
              </div>
          </div>
        </div>
    );
}

export default MovieCard;
