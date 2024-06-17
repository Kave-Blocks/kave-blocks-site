import React from "react";

const Featured6 = () => {
  return (
    <div className="tablet:min-h-screen flex justify-center items-center py-20">
      <div className="flex flex-col gap-y-10">
        <div className="mx-auto flex justify-center items-center max-w-7xl w-full">
          <h1 className="text-[32px] md:text-[40px] font-Raleway leading-[52px] tracking-[3%] w-[80%] text-black font-semibold">
            Starting as enthusiasts Young people walking who wanted to make
            something truly great for other people, we combined our professional
            skills.
          </h1>
        </div>
        <div className="flex flex-col laptop:flex-row h-[571px] w-full gap-x-10">
          <div className="flex-[1.5] relative bg-[#D9D9D9] rounded-r-[30px] w-full">
            <img
              src="/featured6_img1.svg"
              alt=""
              className="laptop:absolute laptop:-bottom-10 laptop:-right-10"
            />
          </div>
          <div className="flex-[1] h-full p-7">
            <div className="h-full laptop:w-[66%] flex flex-col gap-y-10 justify-between">
              <p className="text-[20px] text-[#555555]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[20px] text-[#555555]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <p className="text-[20px] text-[#555555]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <button className="bg-[#C86B1F] px-[25px] py-[20px] rounded-full text-white tablet:w-[max-content]">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured6;
