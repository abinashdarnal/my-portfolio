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

function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      {nav ? (
        <>
          <TiTimes
            onClick={handleNav}
            className="fixed right-2 top-2 z-[99] sm:hidden text-black text-2xl"
          />
          <div className="fixed flex flex-col justify-center items-center w-full h-screen sm:hidden bg-white/40 z-[20]  ease-in-out duration-100 ">
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
              href="#resume"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <AiOutlineOrderedList size={20} />
              <span className="pl-2">Resume</span>
            </a>
            <a
              onClick={handleNav}
              href="#contact"
              className="flex justify-center items-center w-[70%] rounded-full shadow-lg shadow-red-200 active:bg-red-600 ease-in-out duration-300  bg-gray-200 m-3 p-2 cursor:pointer hover:scale-110"
            >
              <AiOutlineMail size={20} />
              <span className="pl-2">Contact</span>
            </a>
          </div>
        </>
      ) : (
        <>
          <FaBars
            onClick={handleNav}
            className="fixed right-3 top-3 z-[99] sm:hidden text-black "
          />
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
            href="#resume"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <AiOutlineOrderedList />
          </a>
          <a
            href="#contact"
            className="p-3 m-2 shadow-lg rounded-full bg-gray-100 shadow-red-200 active:bg-red-600 active:scale-95 ease-in-out duration-300"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Sidenav;
