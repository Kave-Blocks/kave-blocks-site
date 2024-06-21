import React from "react";
import DivFadeIn from "../../animation/DivFadeIn";

const HeroContainer = () => {
  return (
    <div className="mx-auto max-w-screen-monitor tablet:min-h-screen w-full px-4 tablet:px-0 py-20 tablet:py-0">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <DivFadeIn>
          <img
            src="/circle.svg"
            alt=""
            draggable="false"
            className="select-none"
          />
        </DivFadeIn>
        <DivFadeIn>
          <p className="text-[16px] text-center mx-auto md:text-[20px] font-semibold font-Raleway w-full tablet:w-[55%]">
            At Kave Blocks, we're dedicated to shaping the digital future, where
            innovation and ingenuity converge
          </p>
        </DivFadeIn>
      </div>
    </div>
  );
};

export default HeroContainer;
