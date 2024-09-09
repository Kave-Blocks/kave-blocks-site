import React from "react";
import DivFadeRight from "../../animation/DivFadeRight";
import DivFadeLeft from "../../animation/DivFadeLeft";
import DivFadeIn from "../../animation/DivFadeIn";

const Featured3 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-20 px-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-y-10 w-full">
        <DivFadeIn>
          <h2 className="text-[20px] tablet:text-[36px] text-center text-black">
            Your One-Stop web3
            <br /> Digital Service Hub{" "}
          </h2>
        </DivFadeIn>

        <div className="flex flex-col tablet:-space-y-32">
          <DivFadeRight>
            <div className="flex flex-col tablet:flex-row justify-center items-center">
              <div className="w-full desktop:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 laptop:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[16px] tablet:text-[24px]">
                    blockchain solutions
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    We use advanced technology to provide secure, innovative
                    <br className="hidden laptop:block"/> solutions that enhance and streamline your business
                    operations.
                  </p>
                </div>
              </div>
              <img src="/x.webp" alt="" />
            </div>
          </DivFadeRight>
          <DivFadeLeft>
            <div className="flex flex-col-reverse tablet:flex-row justify-center items-center">
              <img src="/c.webp" alt="" />
              <div className="w-full desktop:min-w-[647px] py-10 laptop:py-0 tablet:h-[201px] rounded-[24px] px-5 laptop:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Software Development
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    Our dedicated team creates customized solutions tailored
                    <br className="hidden laptop:block"/> to your specific needs, smoother and more efficient.
                  </p>
                </div>
              </div>
            </div>
          </DivFadeLeft>
          <DivFadeRight>
            <div className="flex flex-col tablet:flex-row justify-center items-center">
              <div className="w-full desktop:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 laptop:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Digital marketing
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    We help you connect with your audience through carefully
                    crafted
                    <br className="hidden laptop:block"/> online strategies that boost your presence and
                    engagement.
                  </p>
                </div>
              </div>
              <img src="/curve.webp" alt="" />
            </div>
          </DivFadeRight>
          <DivFadeLeft>
            <div className="flex flex-col-reverse tablet:flex-row justify-center items-center">
              <img src="/cover.webp" alt="" />
              <div className="w-full desktop:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 laptop:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Branding design
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    Our design create visuals that truly resonate with your
                    <br className="hidden laptop:block"/> audience, effectively reflecting your brand's unique
                    identity.
                  </p>
                </div>
              </div>
            </div>
          </DivFadeLeft>
          <DivFadeRight>
            <div className="flex flex-col tablet:flex-row justify-center items-center">
              <div className="w-full desktop:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 laptop:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Multimedia production
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    We produce creative and engaging content that keeps your
                    <br className="hidden laptop:block"/> audience informed and entertained, fostering a loyal
                    following.
                  </p>
                </div>
              </div>
              <img src="/cone.webp" alt="" />
            </div>
          </DivFadeRight>
          <DivFadeLeft>
            <div className="flex flex-col-reverse tablet:flex-row justify-center items-center">
              <img src="/cut.webp" alt="" />
              <div className="w-full desktop:min-w-[647px] py-10 tablet:py-0 tablet:h-[201px] rounded-[24px] px-5 laptop:px-20 border-[2px] border-[#C86B1F] bg-primary flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black text-[18px] tablet:text-[24px]">
                    Cloud services
                  </h3>
                  <p className="text-paragraph text-[12px] tablet:text-[16px]">
                    Our reliable services are designed to streamline your
                    business<br className="hidden laptop:block"/> operations, providing flexibility and improved
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
