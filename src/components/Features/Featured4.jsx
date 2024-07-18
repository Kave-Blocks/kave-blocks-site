import React from 'react'

const Featured4 = () => {
  return (
    <div className='min-h-screen flex justify-center items-center py-20 px-4'>
        <div className="w-full mx-auto max-w-7xl flex flex-col gap-y-3">
            <div className="flex flex-col desktop:flex-row gap-3 revealing-image">
                <img src="/showcase1.svg" alt="" className='h-[460px] rounded-2xl object-cover'/>
                <img src="/showcase2.svg" alt="" className='h-[460px] w-full rounded-2xl object-cover'/>
            </div>
            <div className="flex flex-col desktop:flex-row gap-3 revealing-image">
                <img src="/showcase3.svg" alt="" className='h-[460px] rounded-2xl object-cover'/>
                <img src="/showcase4.svg" alt="" className='h-[460px] w-full rounded-2xl object-cover'/>
            </div>
            <div className="flex flex-col desktop:flex-row gap-3 revealing-image">
                <img src="/featImg5.svg" alt="" className='h-[460px] rounded-2xl'/>
                <img src="/featImg6.svg" alt="" className='h-[460px] w-full rounded-2xl object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Featured4