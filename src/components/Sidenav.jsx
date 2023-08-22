import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { TiTimes } from "react-icons/ti";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBarChart,
  AiOutlineOrderedList,
  AiOutlineMail,
} from "react-icons/ai";
import { PiPersonArmsSpread } from "react-icons/pi";

function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="scroll-none">
      {nav ? (
        <>
          <div className="fixed right-3 top-3 z-[99] sm:hidden text-black text-2xl box-shadow2 p-1 bg-white rounded-md">
            <TiTimes onClick={handleNav} />
          </div>

          <div className="fixed flex flex-col justify-center items-center w-full h-screen sm:hidden bg-white z-[20]  ease-in-out duration-100 ">
            <a
              onClick={handleNav}
              href="#hero"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <AiOutlineHome size={20} />
              <span className="pl-2">Home</span>
            </a>
            <a
              onClick={handleNav}
              href="#about"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <AiOutlineUser size={20} />
              <span className="pl-2">About</span>
            </a>
            <a
              onClick={handleNav}
              href="#project"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <AiOutlineBarChart size={20} />
              <span className="pl-2">Project</span>
            </a>
            <a
              onClick={handleNav}
              href="#skill"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <PiPersonArmsSpread size={20} />
              <span className="pl-2">Skill</span>
            </a>
            <a
              onClick={handleNav}
              href="#contact"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <AiOutlineMail size={20} />
              <span className="pl-2">Contact</span>
            </a>
            <a
              onClick={handleNav}
              href="#resume"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <AiOutlineOrderedList size={20} />
              <span className="pl-2">Resume</span>
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="fixed right-3 top-3 z-[99] sm:hidden text-black box-shadow2 p-2 bg-white rounded-md">
            <FaBars onClick={handleNav} className="" />
          </div>
        </>
      )}
      <div className="sm:flex hidden h-screen z-[10] fixed">
        <div className=" flex flex-col  justify-center p-2">
          <a
            href="#hero"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <AiOutlineUser />
          </a>
          <a
            href="#project"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <AiOutlineBarChart />
          </a>
          <a
            href="#skill"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <PiPersonArmsSpread />
          </a>
          <a
            href="#contact"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <AiOutlineMail />
          </a>
          <a
            href="#resume"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <AiOutlineOrderedList />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Sidenav;
