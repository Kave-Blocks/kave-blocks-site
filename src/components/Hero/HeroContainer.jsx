import React from "react";

const HeroContainer = () => {
  return (
    <div className="mx-auto animate-fade-down max-w-screen-monitor desktop:min-h-screen w-full px-4 tablet:px-0 pt-20 tablet:py-0">
      <div className="animate-fade-out-down [animation-timeline:scroll()] [animation-range:0px_300px] w-full h-full flex flex-col justify-center items-center">
          <img
            src="/circle.webp"
            alt=""
            draggable="false"
            className="select-none"
            fetchPriority="true"
          />
          {/* <p className="text-[16px] text-center mx-auto md:text-[20px] font-semibold font-Raleway w-full tablet:w-[55%]">
            At Kave Blocks, we're dedicated to shaping the digital future, where
            innovation and ingenuity converge
          </p> */}
      </div>
    </div>
  );
};

export default HeroContainer;
