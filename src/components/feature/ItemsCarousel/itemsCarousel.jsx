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
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Button } from '@mui/material';


const Tab = styled(TabUnstyled)`
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #605D65;
 width: 100%;
  &:focus {
    color: #fff;
    outline: none;
    outline-offset: 0px;
  }
  &:hover{
    background-color: #413F45 !important;
  }

  &.${tabUnstyledClasses.selected} {
    background: #782CE8;
    border-radius: 8px;
    border: none;
    &:hover{
        background-color: #782CE8 !important;
      }
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width : 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  display: flex;
`;

const TabsList = styled(TabsListUnstyled)` 
  width:50%;
  margin-bottom: 16px;
  display: flex;
  justify-content : flex-start;

`;


const servers = [
    {name : "Vidstream", status : false },
    {name : "MyCloud", status : false },
    {name : "VideoVard", status : false },
    {name : "StreamTape", status : false },
    {name : "Doodstream", status : false },
]






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
        <div className='mt-2'>
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
                 <Button className='viewAll__btn viewMobile'>View all services →</Button>
             
     
              


        </Carousel>
     )}
        {props.servers && (
        
               <Carousel responsive={responsive}    autoPlay={false} >
                

           
                   {servers.map((server)=> <div className='servCard'><ServerCard serverName={server.name}/></div>)}
                  
                

              </Carousel>

               )}
           
      </div>
    );
}

export default ItemsCarousel;
