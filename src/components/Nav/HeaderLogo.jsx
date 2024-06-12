import React from 'react'
import DivFadeRight from '../../animation/DivFadeRight'

const HeaderLogo = () => {
  return (
    <DivFadeRight>
        <img src="/headerLogo.svg" alt="" className='w-20 md:w-auto'/>
    </DivFadeRight>
  )
}

export default HeaderLogo
