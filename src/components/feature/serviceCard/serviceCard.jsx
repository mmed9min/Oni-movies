import React from 'react';
import '../serviceCard/serviceCard.css';
const ServiceCard = (props) => {
    return (
        <div className='flex items-center  serviceCard mx-1 md:mx-0 '>
            <img className='serviceImg w-15' src={props.img} alt="" />
            <span className='text-white font-meduim text-sm  ml-3 md:ml-2  whitespace-nowrap'>{props.name}</span>
        </div>
    );
}

export default ServiceCard;
