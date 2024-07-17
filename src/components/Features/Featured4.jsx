import React from 'react'

const Featured4 = () => {
  return (
    <div className='min-h-screen flex justify-center items-center py-20 px-4'>
        <div className="w-full mx-auto max-w-7xl flex flex-col gap-y-3">
            <div className="flex flex-col desktop:flex-row gap-3 revealing-image">
                <img src="/featImg1.svg" alt="" />
                <img src="/featImg2.svg" alt="" />
            </div>
            <div className="flex flex-col desktop:flex-row gap-3 revealing-image">
                <img src="/featImg3.svg" alt="" />
                <img src="/featImg4.svg" alt="" />
            </div>
            <div className="flex flex-col desktop:flex-row gap-3 revealing-image">
                <img src="/featImg5.svg" alt="" />
                <img src="/featImg6.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured4