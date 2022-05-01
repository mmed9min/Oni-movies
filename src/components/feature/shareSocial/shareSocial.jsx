import React from 'react'
import wtsp from '../../../assets/icons/wtsp.svg'
import msngr from '../../../assets/icons/msngr.svg'
import pint from '../../../assets/icons/pint.svg'
import reddit from '../../../assets/icons/reddit.svg'
import fcbk from '../../../assets/icons/fcbk.svg'
import twitt from '../../../assets/icons/twit.svg'
import copy from '../../../assets/icons/copy.svg'
import { Button } from '@material-ui/core'



export default function ShareSocial() {
  return (
    <div className="hero__social flex items-center justify-between lg:mt-0 self-end lg:self-center ">
       <span className='text-white text-sm mr-1 whitespace-nowrap'>Share :</span>
       <img className='w-5 sm:w-4 lg:w-5' src={wtsp} alt="" />
       <img className='w-5 sm:w-4 lg:w-5' src={msngr} alt="" />
       <img className='w-5 sm:w-4 lg:w-5' src={pint} alt="" />
       <img className='w-5 sm:w-4 lg:w-5' src={reddit} alt="" />
       <img className='w-5 sm:w-4 lg:w-5' src={fcbk} alt="" />
       <img className='w-5 sm:w-4 lg:w-5' src={twitt} alt="" />
       <Button className='flex copy__btn '><img src={copy} alt="" width="8px" className='mr-2' /><span>Copy link</span></Button>
    </div>
  )
}
