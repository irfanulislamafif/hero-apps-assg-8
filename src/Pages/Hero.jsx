import React from "react";
import { Link } from "react-router";
import google from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-[4.5rem] leading-none text-center  font-bold">
          We Build <br />
          <span className=" bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
            {" "}
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-xl font-medium text-center text-gray-400 my-6">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center gap-12 mb-4">
        <a href="https://play.google.com/store" className="btn px-5 py-2">
          <img className="w-8" src={google} alt="" />
          Google Play
        </a>
        <a href="https://www.apple.com/app-store/" className="btn px-5 py-2">
          <img className="w-8" src={appStore} alt="" />
          App Store
        </a>
      </div>
      <div className="flex items-center justify-center">
        <img src={hero} alt="" />
      </div>
      <div className="flex flex-col items-center bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white text-center py-15">
        <h1 className="text-4xl text-white font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="mt-8 flex gap-30 text-center">
          <div>
            <h1>Total Downloads</h1>
            <h1>29.6M</h1>
            <h1>21% more than last month</h1>
          </div>
          <div>
            <h1>Total Downloads</h1>
            <h1>29.6M</h1>
            <h1>21% more than last month</h1>
          </div>
          <div>
            <h1>Total Downloads</h1>
            <h1>29.6M</h1>
            <h1>21% more than last month</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
