import React from "react";
import Navbar from "../components/Navbar";
import BgImg from "../images/bg.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />

      {/* <div
        className="h-[92vh] bg-cover bg-center flex items-center justify-center flex-col"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backdropFilterilter: "blur(10px)",
        }}
      >
        <p className="text-white font-[600] text-[55px]">
          Equity in Creativity, Shared Success
        </p>

        <p className="w-[40%] text-center text-white font-[500]">
          Our company bridges the gap between creators and businesses, fostering
          equity-based partnerships that fuel innovation and shared success.
        </p>
      </div> */}


      <Footer />
    </>
  );
};

export default Home;
