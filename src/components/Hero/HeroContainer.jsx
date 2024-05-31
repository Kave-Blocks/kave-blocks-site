import React from 'react'
import DivFadeIn from '../../animation/DivFadeIn'

const HeroContainer = () => {
    return (
        <div className='mx-auto max-w-screen-monitor min-h-screen w-full'>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <DivFadeIn>
                <img src="/circle.svg" alt="" draggable='false' className='select-none'/>
            </DivFadeIn>
            <DivFadeIn>
                <p className='text-[20px] font-semibold font-Raleway'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </DivFadeIn>
          </div>
        </div>
      )
}

export default HeroContainer
