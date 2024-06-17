import { MoveUpRight } from 'lucide-react'
import React from 'react'

const GitInTouch = () => {
  return (
    <div className='flex flex-col overflow-hidden -space-y-32 py-10'>
        <div className="flex flex-nowrap gap-x-20 w-full">
            <span className='text-[#C8C8C8] flex flex-nowrap text-[200px] span-head'>KAVE</span>
            <span className='text-[#C8C8C8] flex flex-nowrap text-[200px] span-head'>BLOCKS</span>
        </div>
        <button className='text-transparent bg-gradient-to-r from-[#C86B1F] to-[#3222B4] text-white flex flex-row flex-nowrap gap-x-10 rounded-full w-[max-content] mx-auto border-none text-6xl btn-gitIntouch py-20 px-28'>GET IN TOUCH <MoveUpRight size={60}/></button>
    </div>
  )
}

export default GitInTouch