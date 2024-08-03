import React from "react";
import { TbCloudDataConnection } from "react-icons/tb";
import { MdInsights } from "react-icons/md";
import { GiGrowth } from "react-icons/gi";

const Features = () => {
  return (
    <>
      <section className={`relative bords py-[120px] `}>
        <div className="container mx-auto z-20">
          <div className="flex justify-center">
            <div className="w-[60%]">
              <div className="text-center">
                <h6 className="tracking-[5px]">BEST FEATURES</h6>
                <h3 className="text-[48px] font-[600] color-font ">
                  We are the First Startup where Visionaries Meet Opportunity
                </h3>
              </div>
            </div>
          </div>

          <div className="flex px-20 gap-5 mt-14 ">
            <div className="w-[33%] flex justify-center items-center flex-col py-[80px] px-[30px] text-center border-[1px] rounded-[15px] border-[rgba(255,255,255,0.05)]">
              <div>
                <span className={`featureIcon text-[rgba(255,255,255,.5)]`}>
                  <TbCloudDataConnection />
                </span>
              </div>
              <div className="cont">
                <h6 className="font-[600] leading-9">Tailored Connections</h6>
                <p className="mt-3">
                  Matchmaking creators with business owners for strategic equity
                  partnerships.
                </p>
              </div>
            </div>
            <div className="w-[33%] flex justify-center items-center flex-col py-[80px] px-[30px] text-center border-[1px] rounded-[15px] border-[rgba(255,255,255,0.05)]">
              <div>
                <span className={`featureIcon text-[rgba(255,255,255,.5)]`}>
                  <MdInsights />
                </span>
              </div>
              <div className="cont">
                <h6 className="font-[600] leading-9">Expert Insights</h6>
                <p className="mt-3">
                  Access industry expertise to guide collaboration and growth
                </p>
              </div>
            </div>
            <div className="w-[33%] flex justify-center items-center flex-col py-[80px] px-[30px] text-center border-[1px] rounded-[15px] border-[rgba(255,255,255,0.05)]">
              <div>
                <span className={`featureIcon text-[rgba(255,255,255,.5)]`}>
                  <GiGrowth />
                </span>
              </div>
              <div className="cont">
                <h6 className="font-[600] leading-9">Growth Support</h6>
                <p className="mt-3">
                Benefit from resources and support for scaling successful ventures.
                </p>
              </div>
            </div>
          </div>
     
        </div>
      </section>
      <div className="line left"></div>

    </>
  );
};

export default Features;
