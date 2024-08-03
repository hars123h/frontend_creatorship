import React from "react";
import About1 from "../images/about1.jpg";
import About2 from "../images/about2.jpg";
import About3 from "../images/about3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about py-[120px] relative flex items-center justify-center">
        
        <div className="w-[85%] ">
          <div className="w-full flex gap-10 ">
            <div className="w-[40%]">
              <div className=" sm:mb-[30px]">
                <div className="flex">
                  <div className="w-[40%] px-[10px] py-0  flex items-center">
                    <div
                      className="h-[200px] rounded-[10px] overflow-hidden wow imago"
                      data-wow-delay=".5s"
                    >
                      <img
                        className="w-[100%] h-[100%] object-cover object-center"
                        src={About1}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[70%] cmd-padding">
                    <div
                      className="rounded-[10px] overflow-hidden h-[240px] wow imago"
                      data-wow-delay=".3s"
                    >
                      <img
                        className="w-[100%] h-[100%] object-cover object-center"
                        src={About2}
                        alt=""
                      />
                    </div>
                    <div
                      className="h-[200px]  w-[75%] mt-[20px] rounded-[10px] overflow-hidde wow imago"
                      data-wow-delay=".8s"
                    >
                      <img
                        className="w-[100%] h-[100%] object-cover object-center"
                        src={About3}
                        alt=""
                      />
                    </div>
                    {/* <div className="container">
                      <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6"></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] offset-lg-1 flex ">
              <div className="content">
                <div className="relative mb-[20px]">
                  <h6 className="font-[300] px-[12px] py-[7px] rounded-[10px] text-[15px] uppercase tracking-widest inline-block bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">
                    About Us
                  </h6>
                </div>
                {/* <Split> */}
                <h3
                  className="font-[600] mb-[15px]"
                 
                >
                  Connecting Visionaries with Ventures,
                  <br />
                  Turning Ideas into Equity
                </h3>
                <p className="" data-splitting>
                  At Creatorship, we bridge the gap between visionary creators
                  and ambitious business owners. Our mission is to forge
                  strategic equity partnerships that drive innovation and
                  growth. By connecting creative minds with capital, we turn
                  groundbreaking ideas into successful ventures, ensuring mutual
                  success and shared value. Partner with us to transform vision
                  into reality and grow together
                </p>

                <Link
                    to="/"
                    className="px-[32px] py-[12px] bg-transparent border border-white rounded-md mt-[20px] transition  duration-400 ease-in  hover:bg-white hover:text-black "
                  >
                    <span>View More</span>
                  </Link>
                {/* </Split> */}
                <div className="ftbox mt-30">
                  <ul>
                    {/* {AboutUs2Date.features.map((feature) => (
                      <li
                        key={feature.id}
                        className={`wow fadeIn ${
                          feature.id == 2 ? "space" : ""
                        }`}
                        data-wow-delay={feature.wowDelay}
                      >
                        <span
                          className={`icon color-font pe-7s-${feature.icon}`}
                        ></span>
                        <h6>
                          {feature.name.first} <br /> {feature.name.second}
                        </h6>
                        <div className="dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </li>
                    ))} */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       

      </div>
      <div className="line right"></div>
     
    </>
  );
};

export default About;
