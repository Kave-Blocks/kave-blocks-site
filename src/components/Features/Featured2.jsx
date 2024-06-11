import React from 'react'

const Featured2 = () => {
  return (
    <div className='min-h-screen flex justify-center items-center px-20 py-20'>
        <div className="relative mx-auto max-w-7xl flex flex-col w-full">
        <img src="/circleOnly.svg" alt="" className='absolute top-0 right-0 -z-10'/>

            <h2 className='text-[36px] text-start mb-10 pl-20'>Lorem ipsum dolor<br/> sit amet adipiscing </h2>
            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-y-5 justify-start items-center">
                    <img src="/designImg.svg" alt="" />
                    <div className="flex flex-col gap-y-4 w-full px-10">
                        <h3 className='text-[24px] text-black'>DESIGN</h3>
                        <p className='text-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 justify-start items-center pt-[130px]">
                    <img src="/developImg.svg" alt="" />
                    <div className="flex flex-col gap-y-4 w-full px-10">
                        <h3 className='text-[24px] text-black'>DESIGN</h3>
                        <p className='text-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 justify-start items-center pt-[260px]">
                    <img src="/maintainImg.svg" alt="" />
                    <div className="flex flex-col gap-y-4 w-full px-10">
                        <h3 className='text-[24px] text-black'>DESIGN</h3>
                        <p className='text-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured2