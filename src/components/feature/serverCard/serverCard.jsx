import React from 'react';
import watch from '../../../assets/icons/Vector1.svg'


const ServerCard = (props) => {
    return (
        <div className="serverCard flex justify-center items-center px-2 ">
          <img src={watch} className="mr-4" width="15px" alt="" />
          <span className='text-white text-xs'>{props.serverName}</span>
        </div>
    );
}

export default ServerCard;
