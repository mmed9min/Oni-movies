import React from 'react';
import watch from '../../../assets/icons/Vector1.svg'
import '../serverCard/serverCard.css'
import { useState } from 'react';

const ServerCard = (props) => {
  const [active, setActive] = useState(props.key)
    return (

        <div  className="serv flex justify-center items-center px-2">
          <img src={watch} className="mr-3 w-30" width="20px" alt="" />
          <span className='text-white text-md'>{props.serverName}</span>
        </div>
     
    );
}

export default ServerCard;
