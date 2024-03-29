import React from 'react';
import heroImg from '../../../assets/images/hero.png'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Circle, CircleOutlined, ModeNight } from '@mui/icons-material';
import wtsp from '../../../assets/icons/wtsp.svg'
import msngr from '../../../assets/icons/msngr.svg'
import pint from '../../../assets/icons/pint.svg'
import reddit from '../../../assets/icons/reddit.svg'
import fcbk from '../../../assets/icons/fcbk.svg'
import twitt from '../../../assets/icons/twit.svg'
import copy from '../../../assets/icons/copy.svg'
import '../watchSection/watchSection.css'
import report from '../../../assets/icons/report.svg'
import watch from '../../../assets/icons/Vector1.svg'
import { Button } from '@mui/material';
import ServerCard from '../serverCard/serverCard';
import ItemsCarousel from '../ItemsCarousel/itemsCarousel';
import favoris from '../../../assets/icons/Vector2.svg'
import favorisFill from '../../../assets/icons/likeFill.svg'
import { useState } from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import EpisodeSection from '../episodeSection/episodeSection';
import ShareSocial from '../shareSocial/shareSocial';


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
    border: 1px solid #782CE8;
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
const WatchSection = () => {
    const [like, setLike] = useState(false);
    const [unlike, setUnlike] = useState(true);


    const handleLike = () => {
        setLike(true);
        setUnlike(false)
    }
    const handleUnlike = ()=>{
        setLike(false);
        setUnlike(true)
    }
   


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12 mt-5'>
            <div className='heroImage'>
                <img src={heroImg} alt="" />
            </div>
            <div className="watch__control flex justify-between items-center mt-5 mb-5 md:mb-1 md:mt-1 px-2 py-6">
                <div className="flex">
                    <div className="autoPlay flex items-center hidden sm:block">
                       <Checkbox className='w-8' {...label} icon={<CircleOutlined sx={{color: "#fff",fontSize:"23px"}} />} checkedIcon={<Circle sx={{color: "#782CE8", fontSize:"22px", border :"3px solid #fff", borderRadius : "50%"}} />} />
                       <span className='text-white text-md'>Auto Play</span>
                    </div>
                    <div className="autoPlay flex items-center ml-2 hidden sm:block">
                       <Checkbox className='w-8' {...label} icon={<ModeNight sx={{color: "#9D9AA2", transform : "rotate(160deg)",fontSize: "24px"}} />} checkedIcon={<ModeNight sx={{color: "#782CE8",transform : "rotate(160deg)",fontSize: "24px"}} />} />
                       <span className='text-white text-md'>Night mode</span>
                    </div>
                    <div className='sm:hidden'>
                        {unlike && ( <Button className='watch__list__btn flex items-center' onClick={handleLike}>
                            <img src={favoris} width="15px" className="mr-2" alt="" />
                            <span>Add to watchlist</span>
                        </Button>)}
                        {like && (<Button className='watch__list__btn flex items-center' onClick={handleUnlike}>
                            <img src={favorisFill} width="15px" className="mr-2" alt="" />
                            <span>Add to watchlist</span>
                        </Button>)}
                    </div>
                </div>
       
                <Button className='flex items-center report__btn'>
                    <img src={report} width="20px" alt="" />
                    <span className='text-white text-md ml-2 font-bold'>Report</span>
                </Button>
            </div>
            <div className="servers__section mt-3">
                
             
                <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center  mt-5">
                    
                  <TabsUnstyled className='epSection w-full hidden sm:block' defaultValue={0}>
                  <span className='gray__txt text-md mb-4'>Select Server: </span>
                        <TabsList className="flex flex-col   sm:flex-row eps flex-wrap gap-2  mt-2">
                       
                        {servers.map((server)=> <Tab className='serverCard'><ServerCard serverName={server.name}/></Tab>)}
                        </TabsList>
                       
                    </TabsUnstyled>
                    <div className="block sm:hidden mb-2 mt-8">
                    <span className='gray__txt text-xs'>Select Server: </span>
                        <ItemsCarousel servers/>
                    </div>
                    <div className='w-full flex justify-end'>
                      <ShareSocial />
                    </div>
                    
                </div>
            </div>
            <div className='mt-10 mb-10'>
               <EpisodeSection />
            </div>
        </div>
    );
}

export default WatchSection;
