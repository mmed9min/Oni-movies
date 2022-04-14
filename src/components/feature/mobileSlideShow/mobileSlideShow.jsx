import React from "react";

import '../mobileSlideShow/mobileSlideShow.css'
import MovieHeroDetail from "../movieHeroDetail/movieHeroDetail";
import heroImage from '../../../assets/images/hero.png'
import heroImage2 from '../../../assets/images/godfather.jpg'
import heroImage3 from '../../../assets/images/catchMe.jpg'

const colors = [
    {
        id: 1,
        title : "The Matrix Resurrections",
        image : heroImage
    },
    {
        id: 2,
        title : "The Godfather",
        image : heroImage2
    },
    {
        id: 3,
        title : "Catch me if you can",
        image : heroImage3
    },
    {
        id: 4,
        title : "The Matrix Resurrections",
        image : heroImage
    },
    {
        id: 5,
        title : "The Godfather",
        image : heroImage2
    },
    {
        id: 6,
        title : "Catch me if you can",
        image : heroImage3
    }

];
const delay = 3000;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((movie, index) => (
          <div className="slide " key={index} >
            <MovieHeroDetail
                  image={movie.image}
                  title={movie.title}
                  description = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
                  duration ="1h 31 min"
                  rating="6.7"
                  type={["Adventure", "Sci-fi"]}
                />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
