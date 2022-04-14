import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceCard from '../serviceCard/serviceCard';
import netflix from '../../../assets/images/netflix.png'
import prime from '../../../assets/images/prime.png'
import disney from '../../../assets/images/disney.png'
import apple from '../../../assets/images/apple.png'
import hulu from '../../../assets/images/hulu.png'
import hbo from '../../../assets/images/hbo.png'
import peacecock from '../../../assets/images/peacock.png'
import funimation from '../../../assets/images/funimation.png'
import ServerCard from '../serverCard/serverCard';
const   responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 30
    }
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className='text-white relative block w-80' onClick={() => onClick()}>button</button>;
  };
const ItemsCarousel = (props) => {

    return (
        <div>
     {props.services && (
        <Carousel responsive={responsive}    autoPlay={false} >
            
                
                 <ServiceCard img={netflix}  name ="Netflix"/>
                 <ServiceCard img={prime} name ="Prime video"/>
                 <ServiceCard img={disney} name ="Disnep +"/>
                 <ServiceCard img={apple} name ="Apple TV"/>
                 <ServiceCard img={hulu} name ="Hulu"/>
                 <ServiceCard img={hbo} name ="Hbo MAX"/>
                 <ServiceCard img={peacecock} name ="Peacock"/>
                 <ServiceCard img={funimation} name ="Funimation"/>
             
         
             {props.servers && (
                <>
                 <ServerCard serverName="Vidstream"/>
                 <ServerCard serverName="MyCloud"/>
                 <ServerCard serverName="VideoVard"/>
                 <ServerCard serverName="StreamTape"/>
                 <ServerCard serverName="Doodstream"/>
            
             </>
            )}
 
              


        </Carousel>
     )}
        {props.servers && (
            <Carousel responsive={responsive}    autoPlay={false} >
                
                 
                 
            
                     <ServerCard serverName="Vidstream"/>
                     <ServerCard serverName="MyCloud"/>
                     <ServerCard serverName="VideoVard"/>
                     <ServerCard serverName="StreamTape"/>
                     <ServerCard serverName="Doodstream"/>
                
            
     
                  
    
    
        </Carousel>
               )}
           
      </div>
    );
}

export default ItemsCarousel;
