import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Features from "../components/Features";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar bgcolor="#18191d" />
      <PageHeader
        className="sub-bg"
        title="About Us"
        paragraph="Our dedicated team of creatives is bursting with talent, experience and passion for what we do "
      />

      <div className="py-[50px] flex px-[150px]">
        <div className="w-[35%]">
          <h4 className="font-[500] text-[30px]">Who we are ?</h4>
        </div>
        <div className="w-[65%]">
          <p>
            At Creatorship, we're revolutionizing the way startups and creators
            collaborate by offering a unique platform that connects innovative
            startup owners with talented creators on an equity basis. We
            understand that startups often need more than just financial
            investment to succeed—they require creative expertise, unique
            perspectives, and innovative solutions. Our platform bridges this
            gap by enabling startup owners to partner with creators who are
            eager to contribute their skills in exchange for equity stakes.
          </p>
        </div>
      </div>

      <div className="py-[50px] flex px-[150px]">
        <div className="w-[35%]">
          <h4 className="font-[500] text-[30px]">Our Mission</h4>
        </div>
        <div className="w-[65%]">
          <p>
            Our mission is to empower startups and creators to build
            groundbreaking ventures together. We believe that by fostering
            partnerships based on mutual trust and shared vision, we can create
            a thriving ecosystem where both parties benefit and grow. We aim to
            democratize access to creative talent for startups and provide
            creators with meaningful opportunities to impact emerging
            businesses.
          </p>
        </div>
      </div>

      <Features />

      <Footer />

    </>
  );
};

export default About;
