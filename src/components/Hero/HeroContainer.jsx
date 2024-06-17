import React from 'react'
import DivFadeIn from '../../animation/DivFadeIn'

const HeroContainer = () => {
    return (
        <div className='mx-auto max-w-screen-monitor tablet:min-h-screen w-full px-4 tablet:px-0'>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <DivFadeIn>
                <img src="/circle.svg" alt="" draggable='false' className='select-none'/>
            </DivFadeIn>
            <DivFadeIn>
                <p className='text-[16px] text-center mx-auto md:text-[20px] font-semibold font-Raleway w-full tablet:w-[50%]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </DivFadeIn>
          </div>
        </div>
      )
}

export default HeroContainer
