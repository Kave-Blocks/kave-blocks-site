import React from 'react'
import DivFadeIn from '../../animation/DivFadeIn'

const InfiniteXMovement = () => {
  return (
    <DivFadeIn>
    <div className='flex flex-row flex-nowrap w-full animate-container px-5 overflow-x-hidden -skew-y-3 h-[116px] bg-gradient-to-r from-[#C86B1F] to-[#3222B4]'>
      <div className="flex flex-row gap-x-5 items-center px-2 shrink-0 infinite-x-animate">
        <span className='text-white text-6xl pl-l tracking-wider'>MAINTAIN</span>
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>DESIGN</span>
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>DEVELOP</span>
      </div>
      <div className="flex flex-row gap-x-5 items-center px-2 shrink-0 infinite-x-animate">
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>MAINTAIN</span>
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>DESIGN</span>
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>DEVELOP</span>
      </div>
      <div className="flex flex-row gap-x-5 items-center px-2 shrink-0 infinite-x-animate">
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>MAINTAIN</span>
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>DESIGN</span>
        <span className='w-[15px] h-[15px] rounded-full bg-white'></span>
        <span className='text-white text-6xl tracking-wider'>DEVELOP</span>
      </div>
    </div>
    </DivFadeIn>
  )
}

export default InfiniteXMovement
