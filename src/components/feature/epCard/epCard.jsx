import React from 'react'
import '../epCard/epCard.css'

export default function EpCard(props) {
  return (
    <div  className="epCard flex items-center px-5 py-2  ">
    
          <span className='text-white text-md md:text-md m-0'>{props.epName}</span>
    </div>
  )
}
