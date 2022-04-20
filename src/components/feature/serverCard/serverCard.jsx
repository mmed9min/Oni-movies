import React from 'react';
import watch from '../../../assets/icons/Vector1.svg'
import '../serverCard/serverCard.css'
import { useState } from 'react';

const ServerCard = (props) => {
  const [active, setActive] = useState(props.key)
    return (
        <div  className="serverCard flex justify-center items-center px-2">
          <img src={watch} className="mr-3" width="15px" alt="" />
          <span className='text-white text-xs'>{props.serverName}</span>
        </div>
    );
}

export default ServerCard;
