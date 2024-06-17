import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <div className='flex justify-center items-center py-20 bg-black'>
        <div className="mx-auto max-w-7xl w-full flex flex-col laptop:flex-row">
            <div className="flex-[1] flex justify-center items-center mb-10 laptop:mb-0">
                <h2 className='text-2xl tablet:text-5xl text-white text-center tablet:text-start'>DIGITAL WEB3 AGENCY</h2>
            </div>
            <div className="flex-[1] flex justify-center items-center border-l-[1px] border-white px-10 text-white">
                <div className="flex flex-col justify-center items-center gap-y-7">
                    <img src="/headerLogo.svg" alt="" className='w-[100px] tablet:w-[200px]'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                    <p>
                    Copyright © 2023 Kave Blocks. All Rights Reserved.
                    </p>
                </div>
            </div>
            <div className="flex-[1] flex justify-center items-center border-l-[1px] border-white ">
                <div className="flex flex-col justify-center items-center laptop:justify-start laptop:items-start gap-y-5 w-full px-10 mt-10 text-white">
                    <h3>CONTACT</h3>
                    <div className="flex flex-col">
                        <p>exampleemail@gmail.com</p>
                        <p>+63 953 248 2848</p>
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer