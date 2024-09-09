import React from 'react'

const Featured4 = () => {
  return (
    <div className='min-h-screen flex justify-center items-center py-20 px-4'>
        <div className="w-full mx-auto max-w-7xl flex flex-col gap-y-3">
            <div className="flex flex-col tablet:flex-row gap-3 revealing-image overflow-hidden">
                <img src="/showcase1.webp" alt="" className='h-[460px] rounded-2xl object-cover'/>
                <img src="/showcase4.webp" alt="" className='h-[460px] w-full rounded-2xl object-cover'/>
            </div>
            <div className="flex flex-col tablet:flex-row gap-3 revealing-image overflow-hidden">
                <img src="/showcase3.webp" alt="" className='h-[460px] rounded-2xl object-cover'/>
                <img src="/internsprogram.webp" alt="" className='h-[460px] w-full rounded-2xl object-cover'/>
            </div>
            
            <div className="flex flex-col tablet:flex-row gap-3 revealing-image overflow-hidden">
                <img src="/tradersnight.webp" alt="" className='h-[460px] rounded-2xl'/>
                <img src="/showcase2.webp" alt="" className='h-[460px] w-full rounded-2xl object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Featured4