import React from "react";

function Education({ year, level, from, duration, details }) {
  return (
    <>
      <div className=" flex flex-col relative border-l border-red-300">
        <div className="mb-8 ml-3 ">
          <div className="absolute w-3 h-3 bg-red-300 rounded-full top-1 -left-[6px]" />
          <p className="flex gap-4 items-center">
            <span className="bg-red-600 px-3 rounded-md text-white font-bold">
              {year}
            </span>
            <span className="text-red-600 font-semibold">{level}</span>
            <span className="text-sm font-mono">{duration}</span>
          </p>
          <p className="text-red-800/80 font-semibold ">{from}</p>
          <p className="font-sans serif">{details}</p>
        </div>
      </div>
    </>
  );
}
export default Education;
