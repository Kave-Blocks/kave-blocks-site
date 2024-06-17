import React from 'react'
import DivFadeIn from '../../animation/DivFadeIn'

const Featured1 = () => {
  return (
    <div className='tablet:smin-h-screen flex justify-center items-center'>
      <DivFadeIn>
        <img src="/featured1.svg" alt="" className='object-cover object-center'/>
      </DivFadeIn>
    </div>
  )
}

export default Featured1
