import React from 'react';
import name from '../serviceCard/serviceCard.css';
const ServiceCard = (props) => {
    return (
        <div className='flex items-center  serviceCard mx-1 md:mx-0 '>
            <img className='md:w-10' src={props.img} alt="" />
            <span className='text-white font-meduim text-sm md:text-xs ml-3 md:ml-2  whitespace-nowrap'>{props.name}</span>
        </div>
    );
}

export default ServiceCard;
