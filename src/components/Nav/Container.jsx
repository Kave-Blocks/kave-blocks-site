import React from 'react'
import HeaderLogo from './HeaderLogo'
import Location from './Location'

const Container = () => {
  return (
    <div className='mx-auto max-w-screen-monitor w-full py-5 font-Raleway px-4 md:px-20'>
      <div className="w-full flex justify-between items-center">
        <HeaderLogo />
        <Location />
      </div>
    </div>
  )
}

export default Container
