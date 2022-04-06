import React from 'react';
import name from '../serviceCard/serviceCard.css';
const ServiceCard = (props) => {
    return (
        <div className='flex items-center  serviceCard'>
            <img width="41px" src={props.img} alt="" />
            <span className='text-white font-meduim text-xs ml-2  whitespace-nowrap'>{props.name}</span>
        </div>
    );
}

export default ServiceCard;
