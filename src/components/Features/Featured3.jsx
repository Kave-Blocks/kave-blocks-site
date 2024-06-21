import React from "react";
import DivFadeRight from "../../animation/DivFadeRight";
import DivFadeLeft from "../../animation/DivFadeLeft";

const Featured3 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-20 px-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-y-10 w-full">
        <h2 className="text-[20px] tablet:text-[36px] text-center text-black">
          Your One-Stop web3
          <br /> Digital Service Hub{" "}
        </h2>

        <div className="flex flex-col laptop:-space-y-32">
          <DivFadeRight>
            <div className="flex flex-col laptop:flex-row justify-center items-center">
              <div className="w-full laptop:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 tablet:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[16px] tablet:text-[24px]">
                    blockchain solutions
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    We use advanced technology to provide secure, innovative
                    <br /> solutions that enhance and streamline your business
                    operations.
                  </p>
                </div>
              </div>
              <img src="/x.svg" alt="" />
            </div>
          </DivFadeRight>
          <DivFadeLeft>
            <div className="flex flex-col-reverse laptop:flex-row justify-center items-center">
              <img src="/c.svg" alt="" />
              <div className="w-full tablet:min-w-[647px] py-10 laptop:py-0 tablet:h-[201px] rounded-[24px] px-5 tablet:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Software Development
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    Our dedicated team creates customized solutions tailored
                    <br /> to your specific needs, smoother and more efficient.
                  </p>
                </div>
              </div>
            </div>
          </DivFadeLeft>
          <DivFadeRight>
            <div className="flex flex-col laptop:flex-row justify-center items-center">
              <div className="w-full tablet:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 tablet:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Digital marketing
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    We help you connect with your audience through carefully
                    crafted
                    <br /> online strategies that boost your presence and
                    engagement.
                  </p>
                </div>
              </div>
              <img src="/curve.svg" alt="" />
            </div>
          </DivFadeRight>
          <DivFadeLeft>
            <div className="flex flex-col-reverse laptop:flex-row justify-center items-center">
              <img src="/cover.svg" alt="" />
              <div className="w-full tablet:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 tablet:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Branding design
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    Our design create visuals that truly resonate with your
                    <br /> audience, effectively reflecting your brand's unique
                    identity.
                  </p>
                </div>
              </div>
            </div>
          </DivFadeLeft>
          <DivFadeRight>
            <div className="flex flex-col laptop:flex-row justify-center items-center">
              <div className="w-full tablet:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 tablet:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Multimedia production
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    We produce creative and engaging content that keeps your
                    <br /> audience informed and entertained, fostering a loyal
                    following.
                  </p>
                </div>
              </div>
              <img src="/cone.svg" alt="" />
            </div>
          </DivFadeRight>
          <DivFadeLeft>
            <div className="flex flex-col-reverse laptop:flex-row justify-center items-center">
              <img src="/cover.svg" alt="" />
              <div className="w-full tablet:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 tablet:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Cloud services
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    Our reliable services are designed to streamline your
                    business operations, providing flexibility and improved
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </DivFadeLeft>
        </div>
      </div>
    </div>
  );
};

export default Featured3;
