import { MoveUpRight } from "lucide-react";
import React from "react";

const GitInTouch = () => {
  return (
    <div className="flex flex-col overflow-hidden laptop:-space-y-32 py-10 mb-10 laptop:mt-0">
      <div className="flex justify-center items-center flex-nowrap gap-x-20 w-full">
        <span className="text-[#C8C8C8] flex flex-nowrap text-[100px] laptop:text-[200px] span-head">
          KAVE
        </span>
        <span className="text-[#C8C8C8] flex flex-nowrap text-[100px] laptop:text-[200px] span-head">
          BLOCKS
        </span>
      </div>
      <a href="https://calendly.com/kaveguild" target="_blank" className="text-transparent hover:scale-[1.3] duration-300 bg-gradient-to-r from-[#C86B1F] to-[#3222B4] text-white flex flex-row flex-nowrap gap-x-10 rounded-full w-[max-content] mx-auto border-none tablet:text-4xl laptop:text-6xl btn-gitIntouch tablet:px-16 laptop:py-20 laptop:px-28 px-7 py-3">
        GET IN TOUCH <MoveUpRight className="w-[30px]" />
      </a>
    </div>
  );
};

export default GitInTouch;
