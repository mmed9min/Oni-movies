import React from 'react';
import '../serviceCard/serviceCard.css';
const ServiceCard = (props) => {
    return (
        <div className='flex items-center  serviceCard mx-1 md:mx-0 '>
            <img className='serviceImg  h-full' src={props.img} alt="" />
            <span className='text-white font-meduim text-xs 2xl:text-sm  ml-2  lg:ml-1 2xl:ml-2  whitespace-nowrap'>{props.name}</span>
        </div>
    );
}

export default ServiceCard;
