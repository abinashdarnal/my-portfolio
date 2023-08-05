import React from "react";
function ProjectItems({ img, title, sub_title }) {
  return (
    <div className="relative cursor-pointer flex justify-center items-center rounded-lg shadow-lg group hover:bg-gradient-to-l from-red-600 to-red-100">
      <img src={img} alt="/" className="rounded-lg group-hover:opacity-10" />
      <div className="hidden  group-hover:block absolute ">
        <div className="text-white text-center font-semibold tracking-wider">
          {title}
        </div>
        <div className="text-xs text-center py-2 ">{sub_title}</div>
        <a href="/" className="flex justify-center">
          <p className="text-center bg-white px-4 py-1 rounded-lg active:scale-95 ">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
}
export default ProjectItems;
