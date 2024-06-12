import React from 'react'
import DivFadeLeft from '../../animation/DivFadeLeft'

const Location = () => {
  return (
    <DivFadeLeft>
        <div className='flex flex-col'>
            <p className='text-[#777777] text-[14px] md:text-[20px] opacity-70'>Creative agency based in</p>
            <p className='text-[#777777] text-[14px] md:text-[20px]'>General Santos City, PH</p>
        </div>
    </DivFadeLeft>
  )
}

export default Location
