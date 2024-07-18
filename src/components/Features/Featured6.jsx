import React from "react";
import DivFadeIn from "../../animation/DivFadeIn";
import DivFadeRight from "../../animation/DivFadeRight";
import DivFadeLeft from "../../animation/DivFadeLeft";

const Featured6 = () => {
  return (
    <div className="tablet:min-h-screen flex justify-center items-center tablet:py-20">
      <div className="flex flex-col gap-y-10">
        <DivFadeIn>
          <div className="mx-auto flex justify-center items-center max-w-[1030px]">
            <h1 className="text-[24px] md:text-[40px] text-start w-[60%] font-Raleway tracking-[3%] text-black font-bold">
            Starting as enthusiasts Young people walking who wanted to make something truly great for other people, we combined our professional skills.
            </h1>
          </div>
        </DivFadeIn>
        <div className="flex flex-col laptop:flex-row tablet:h-[571px] w-full gap-x-10">
          <div className="flex-[1.5] relative rounded-r-[30px] w-full">
            <DivFadeRight>
            <img
              src="/Rectangle 52.svg"
              alt=""
              className="object-cover w-full"
            />
            <img
              src="/featured6_img1.svg"
              alt=""
              className="laptop:absolute laptop:-bottom-20 laptop:-right-10"
            />
            </DivFadeRight>
          </div>
          <div className="flex-[1] h-full p-7">
            <DivFadeLeft>
            <div className="h-full laptop:w-[66%] flex flex-col gap-y-10 justify-between">
              <p className="text-[20px] text-[#555555]">
                At Kave Blocks, we are driven by a passion for innovation and
                excellence. Our team combines diverse professional expertise to
                deliver tailored IT solutions that propel businesses forward in
                the digital age.
              </p>
              <p className="text-[20px] text-[#555555]">
                With a commitment to harnessing cutting-edge technology, we
                empower our clients to achieve their goals and navigate the
                complexities of today's digital landscape.
              </p>
              <p className="text-[20px] text-[#555555]">
                Discover how Kave Blocks can elevate your business with our
                comprehensive suite of services, from blockchain solutions to
                multimedia production and beyond.
              </p>
              <button className="bg-[#C86B1F] px-[25px] py-[20px] rounded-full text-white tablet:w-[max-content]">
                REQUEST A QUOTE
              </button>
            </div>
            </DivFadeLeft>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured6;
