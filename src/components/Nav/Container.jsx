import React from "react";
import HeaderLogo from "./HeaderLogo";
import Location from "./Location";
import DivFadeLeft from "../../animation/DivFadeLeft";

const Container = () => {
  return (
    <div className="mx-auto max-w-screen-desktop w-full py-5 font-Raleway px-4 md:px-20">
      <div className="w-full flex justify-between items-center">
        <HeaderLogo />
        <DivFadeLeft>
        <a href="https://calendly.com/kaveguild" target="_blank" className="bg-[#C86B1F] text-white px-5 py-2 rounded-full font-Raleway font-semibold">
        Get in Touch
       </a>
        </DivFadeLeft>
      </div>
    </div>
  );
};

export default Container;
