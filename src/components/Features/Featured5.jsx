import React from "react";
import DivFadeRight from "../../animation/DivFadeRight";
import DivFadeLeft from "../../animation/DivFadeLeft";
import DivFadeIn from "../../animation/DivFadeIn";

const Featured5 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-20 px-4">
      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col laptop:flex-row gap-5">
          <div className="flex-[1] flex flex-col justify-center items-center gap-y-5">
            <DivFadeRight>
              <div className="flex flex-col -space-y-7 bg-primary rounded-[24px] p-6">
                <h3 className="text-black">Affordable and Quality Services</h3>
                <div className="flex justify-center items-center">
                  <img src="/Group94.svg" alt="" width="250px" height="250px"/>
                </div>
                <p>
                  We are committed to delivering top-notch services at competitive
                  prices, ensuring you get the best value.
                </p>
              </div>
            </DivFadeRight>
            <DivFadeRight>
              <div className="flex flex-col -space-y-7 bg-primary rounded-[24px] p-6">
                <h3 className="text-black">Timely and Reliable Delivery</h3>
                <div className="flex justify-center items-center">
                  <img src="/Group 99.svg" alt="" width="250px" height="250px"/>
                </div>
                <p>
                  We guarantee that your projects will be completed on time and to
                  your satisfaction, consistently.
                </p>
              </div>
            </DivFadeRight>
          </div>
          <div className="flex-[1] flex flex-col justify-center items-center gap-y-5">
            <DivFadeIn>
              <div className="flex flex-col -space-y-7 bg-primary rounded-[24px] p-6">
                <h3 className="text-black">Experienced & Passionate Team</h3>
                <div className="flex justify-center items-center">
                  <img src="/Group 99 (1).svg" alt="" width="250px" height="250px"/>
                </div>
                <p>
                  Our dedicated team brings a wealth of expertise and unwavering
                  enthusiasm, ensuring top-quality results.
                </p>
              </div>
            </DivFadeIn>
            <DivFadeIn>
              <div className="py-10">
                <img src="/Framelogo.svg" alt="" width="250px" height="250px"/>
              </div>
            </DivFadeIn>
            <DivFadeIn>
              <div className="flex flex-col -space-y-7 bg-primary rounded-[24px] p-6">
                <h3 className="text-black">Open and Honest Communication
                </h3>
                <div className="flex justify-center items-center">
                  <img src="/Group94(1).svg" alt="" width="250px" height="250px"/>
                </div>
                <p>
                  We maintain clear and honest communication throughout the
                  project, ensuring transparency.
                </p>
              </div>
            </DivFadeIn>
          </div>
          <div className="flex-[1] flex flex-col justify-center items-center gap-y-5">
            <DivFadeLeft>
              <div className="flex flex-col -space-y-7 bg-primary rounded-[24px] p-6">
                <h3 className="text-black">Customizable Project Solutions</h3>
                <div className="flex justify-center items-center">
                  <img src="/Group113.svg" alt="" width="250px" height="250px"/>
                </div>
                <p>
                  We tailor our solutions to fit your unique needs and
                  requirements, providing a bespoke approach for each client.
                </p>
              </div>
            </DivFadeLeft>
           <DivFadeLeft>
            <div className="flex flex-col -space-y-7 bg-primary rounded-[24px] p-6">
                <h3 className="text-black">Scalable Solutions for Growth</h3>
                <div className="flex justify-center items-center">
                  <img src="/Group99(2).svg" alt="" width="250px" height="250px"/>
                </div>
                <p>
                  Our solutions are designed to grow with your business, providing
                  scalability and flexibility to support your success.
                </p>
              </div>
           </DivFadeLeft>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured5;
