import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../images/hero.jpg";

const Hero = () => {
  return (
    <>
      <header className="min-h-[100vh] py-[120px] px-0 flex items-center justify-center relative slider-st">
        <div className=" w-[85%] ">
          <div className="w-full flex  gap-5">
            <div className="w-1/2 flex items-center">
              <div className="cont md:mb-[50px]">
                <div className="relative mb-5">
                  <h6 className="font-[300] px-[12px] py-[7px] rounded-[10px] text-[15px] uppercase tracking-widest inline-block bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">
                  Transforming Ideas into Equity
                  </h6>
                </div>
                <h1 className="mb-[10px] font-[600]">
                  Equity in Creativity, Shared Success
                </h1>
                <p>
                  Connecting visionary creators with business owners to forge
                  equity partnerships. We facilitate collaboration where
                  innovative ideas meet strategic investment, driving growth and
                  shared success in every venture
                </p>
                
                  <Link
                    to="/"
                    className="px-[32px] py-[12px] bg-transparent border border-white rounded-md mt-[20px] transition  duration-400 ease-in  hover:bg-white hover:text-black "
                  >
                    <span>About Us</span>
                  </Link>
                
              </div>
            </div>
            <div className="w-1/2">
              <div className="img">
                <img className="w-[90%]" src={HeroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="line bottom left"></div>
      </header>
    </>
  );
};

export default Hero;
