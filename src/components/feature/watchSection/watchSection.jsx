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
const WatchSection = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12 mt-5'>
            <div className='heroImage'>
                <img src={heroImg} alt="" />
            </div>
            <div className="watch__control flex justify-between items-center mt-1 px-2">
                <div className="flex">
                    <div className="autoPlay flex items-center">
                       <Checkbox className='w-8' {...label} icon={<CircleOutlined sx={{color: "#fff",fontSize:"21px"}} />} checkedIcon={<Circle sx={{color: "#782CE8", fontSize:"19px", border :"2px solid #fff", borderRadius : "50%",padding : "1px"}} />} />
                       <span className='text-white text-xs'>Auto Play</span>
                    </div>
                    <div className="autoPlay flex items-center ml-2">
                       <Checkbox className='w-8' {...label} icon={<ModeNight sx={{color: "#9D9AA2", transform : "rotate(160deg)",fontSize: "20px"}} />} checkedIcon={<ModeNight sx={{color: "#782CE8",transform : "rotate(160deg)",fontSize: "20px"}} />} />
                       <span className='text-white text-xs'>Night mode</span>
                    </div>
                </div>
       
                <Button className='flex items-center report__btn'>
                    <img src={report} width="16px" alt="" />
                    <span className='text-white text-xs ml-2'>Report</span>
                </Button>
            </div>
            <div className="servers__section mt-3">
                <span className='gray__txt text-xs'>Select Server: </span>
             
                <div className="flex flex-col lg:flex-row justify-between sm:items-center mt-1">
                    <div className="hidden sm:grid grid-cols-5 lg:grid-cols-5 gap-2 servers w-70 h-10">
                        <ServerCard serverName="Vidstream"/>
                        <ServerCard serverName="MyCloud"/>
                        <ServerCard serverName="VideoVard"/>
                        <ServerCard serverName="StreamTape"/>
                        <ServerCard serverName="Doodstream"/>
                    </div>
                    <div className="block sm:hidden">
                        <ItemsCarousel servers/>
                    </div>
                    <div className="hero__social flex items-center justify-between mt-5 lg:mt-0">
                       <span className='text-white text-sm mr-2 whitespace-nowrap'>Share :</span>
                       <img className='mr-2 w-5' src={wtsp} alt="" />
                       <img className='mr-2 w-5' src={msngr} alt="" />
                       <img className='mr-2 w-5' src={pint} alt="" />
                       <img className='mr-2 w-5' src={reddit} alt="" />
                       <img className='mr-2 w-5' src={fcbk} alt="" />
                       <img className='mr-2 w-5' src={twitt} alt="" />
                    <Button className='flex items-center copy__btn '><img src={copy} alt="" className='mr-2' /><span>Copy link</span></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchSection;