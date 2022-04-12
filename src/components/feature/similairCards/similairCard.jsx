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
            <div className="grid grid-cols-4 gap-2 mt-3">
              <MovieCard movieImg={movieImg1}/>
              <MovieCard movieImg={movieImg2}/>
              <MovieCard movieImg={movieImg3}/>
              <MovieCard movieImg={movieImg4}/>
              <MovieCard movieImg={movieImg1}/>
              <MovieCard movieImg={movieImg2}/>
              <MovieCard movieImg={movieImg3}/>
              <MovieCard movieImg={movieImg4}/>
            </div>
        </div>
    );
}

export default SimilairCard;
