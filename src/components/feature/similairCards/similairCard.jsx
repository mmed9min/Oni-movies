import React from 'react';
import movieImg1 from '../../../assets/images/movie.png'
import movieImg2 from '../../../assets/images/movie2.png'
import movieImg3 from '../../../assets/images/movie3.png'
import movieImg4 from '../../../assets/images/movie4.png'
import MovieCard from '../movieCard/movieCard';


const SimilairCard = () => {
    return (
        <div className='mt-5'>
            <span className='text-white text-2xl font-bold'>Similar titles :</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-3 sm:gap-4">
              <MovieCard movieImg={movieImg1} resolution="CAM"/>
              <MovieCard movieImg={movieImg2} resolution="CAM"/>
              <MovieCard movieImg={movieImg3} resolution="CAM"/>
              <MovieCard movieImg={movieImg4} resolution="CAM"/>
              <MovieCard movieImg={movieImg1} resolution="CAM"/>
              <MovieCard movieImg={movieImg2} resolution="CAM"/>
              <MovieCard movieImg={movieImg3} resolution="CAM"/>
              <MovieCard movieImg={movieImg4} resolution="CAM"/>
            </div>
        </div>
    );
}

export default SimilairCard;
