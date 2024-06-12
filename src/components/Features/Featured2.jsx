import React from 'react'

const Featured2 = () => {
  return (
    <div className='min-h-screen flex justify-center items-center px-4 tablet:px-20 py-20 w-full'>
        <div className="relative mx-auto max-w-7xl flex flex-col w-full">
        <img src="/circleOnly.svg" alt="" className='hidden tablet:block absolute top-0 -right-12 z-0'/>

            <h2 className='text-[20px] tablet:text-[36px] text-start text-black mb-10 tablet:pl-20'>Lorem ipsum dolor<br/> sit amet adipiscing </h2>
            <div className="grid tablet:grid-cols-3 gap-5 z-10 w-full">
                <div className="flex flex-col gap-y-5 justify-start items-center">
                    <img src="/designImg.svg" alt="" />
                    <div className="flex flex-col gap-y-4 w-full px-10">
                        <h3 className='text-[24px] text-black'>DESIGN</h3>
                        <p className='text-paragraph font-Raleway'>
                        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 justify-start items-center tablet:pt-[130px]">
                    <img src="/developImg.svg" alt="" />
                    <div className="flex flex-col gap-y-4 w-full px-10">
                        <h3 className='text-[24px] text-black'>DESIGN</h3>
                        <p className='text-paragraph font-Raleway'>
                        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 justify-start items-center tablet:pt-[260px]">
                    <img src="/maintainImg.svg" alt="" />
                    <div className="flex flex-col gap-y-4 w-full px-10">
                        <h3 className='text-[24px] text-black'>DESIGN</h3>
                        <p className='text-paragraph font-Raleway'>
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