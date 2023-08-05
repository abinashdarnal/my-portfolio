import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

function Hero() {
  return (
    <div id="hero" className=" w-full h-screen ">
      <img
        src="https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 w-full h-full bg-white/30 flex justify-center items-center ">
        <div className="w-[80%]">
          <h1 className="text-white sm:text-4xl text-3xl font-bold sm:mb-3">
            I'm Abinash Darnal
          </h1>
          <h2 className="text-white sm:text-2xl text-xl  font-semibold sm:mb-4">
            And i'm a &nbsp;
            <span className="text-red-700">
              <TypeAnimation
                sequence={["Web Designer", 1000, "Frontend Developer", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h2>
          <div className="flex m-2">
            <a
              href="#facebook"
              className="bg-red-600 text-white p-2 rounded-full active:scale-95 mx-3"
            >
              <FaFacebookF />
            </a>
            <a
              href="#instagram"
              className="bg-red-600 text-white p-2 rounded-full active:scale-95 mx-3"
            >
              <FaInstagram />
            </a>
            <a
              href="#linkin"
              className="bg-red-600 text-white p-2 rounded-full active:scale-95 mx-3"
            >
              <FaLinkedin />
            </a>
            <a
              href="#google"
              className="bg-red-600 text-white p-2 rounded-full active:scale-95 mx-3"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
