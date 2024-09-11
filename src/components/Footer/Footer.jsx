import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-20 bg-black">
      <div className="mx-auto max-w-7xl w-full flex flex-col laptop:flex-row">
        <div className="flex-[1] flex justify-center items-center mb-10 laptop:mb-0">
          <h2 className="text-2xl tablet:text-5xl text-white text-center tablet:text-start">
          YOUR WEB3 AGENCY
          </h2>
        </div>
        <div className="flex-[1] flex justify-center items-center border-l-[1px] border-white px-10 text-white">
          <div className="flex flex-col justify-center items-center gap-y-7">
            <img
              src="/headerLogo.webp"
              alt=""
              className="w-[100px] tablet:w-[200px]"
            />
            <p className="text-center">
              Kave Blocks provides expertly tailored IT solutions for
              businesses. Our mission is to empower businesses with cutting-edge
              technology and innovative strategies, propelling them towards
              success in the digital era.
            </p>
            <p>Copyright © 2023 Kave Blocks. All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex-[1] flex justify-center items-center border-l-[1px] border-white ">
          <div className="flex flex-col justify-center items-center laptop:justify-start laptop:items-start gap-y-5 w-full px-10 mt-10 text-white">
            <h3 className="text-[20px]">CONTACT</h3>
            <div className="flex flex-col">
              <p>kaveguild@gmail.com</p>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
