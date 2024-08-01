import React from "react";
import DivFadeRight from "../../animation/DivFadeRight";

const Featured2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 tablet:px-20 py-20 w-full">
      <div className="relative mx-auto max-w-7xl flex flex-col w-full">
        <img
          src="/circleOnly.svg"
          alt=""
          className="hidden laptop:block  laptop:absolute laptop:top-0 laptop:-right-12 z-0"
        />

        <DivFadeRight>
          <h2 className="text-[20px] tablet:text-[36px] text-start text-black mb-10 tablet:pl-20">
            we take no-nonsense
            <br /> process for clients{" "}
          </h2>
        </DivFadeRight>
        <div className="grid tablet:grid-cols-3 gap-5 z-10 w-full">
          <div className="flex flex-col gap-y-5 justify-start items-center">
          <div className="group relative overflow-hidden md:w-[386px] md:h-[500px] rounded-3xl">
            <img src="/designImg.svg" alt="" className="group-hover:scale-[1.1] duration-300 w-full h-full object-cover"/>
            <div className="absolute top-0 left-0 justify-center items-center w-full h-full hidden group-hover:block backdrop-blur-sm duration-300">
              <div className="h-full w-full flex justify-center items-center">
                <h3 className="text-[40px] text-white font-bold tracking-wider">DESIGN</h3>
              </div>
            </div>
          </div>
            <div className="flex flex-col gap-y-4 w-full px-10">
              <h3 className="text-[24px] text-black">DESIGN</h3>
              <p className="text-paragraph font-Raleway">
                Every project is carefully planned, crafted,
                <br /> researched, and designed for your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 justify-start items-center tablet:pt-[130px]">
            <div className="group relative overflow-hidden md:w-[386px] md:h-[500px] rounded-3xl">
              <img src="/developImg.svg" alt="" className="group-hover:scale-[1.1] duration-300 w-full h-full object-cover"/>
              <div className="absolute top-0 left-0 justify-center items-center w-full h-full hidden group-hover:block backdrop-blur-sm duration-300">
                <div className="h-full w-full flex justify-center items-center">
                  <h3 className="text-[40px] text-white font-bold tracking-wider">DEVELOP</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full px-10">
              <h3 className="text-[24px] text-black">DEVELOP</h3>
              <p className="text-paragraph font-Raleway">
                Our solutions are thoughtfully gestated, <br /> developed, and
                tested for perfection.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 justify-start items-center tablet:pt-[260px]">
            <div className="group relative overflow-hidden md:w-[386px] md:h-[500px] rounded-3xl">
              <img src="/maintainImg.svg" alt="" className="group-hover:scale-[1.1] duration-300 w-full h-full object-cover"/>
              <div className="absolute top-0 left-0 justify-center items-center w-full h-full hidden group-hover:block backdrop-blur-sm duration-300">
                <div className="h-full w-full flex justify-center items-center">
                  <h3 className="text-[40px] text-white font-bold tracking-wider">MAINTAIN</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full px-10">
              <h3 className="text-[24px] text-black">MAINTAIN</h3>
              <p className="text-paragraph font-Raleway">
                We ensure seamless performance and
                <br /> reliability for each of our finished projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured2;
