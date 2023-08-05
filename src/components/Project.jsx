import React from "react";
import BroadwayCloneimg from "../assets/BroadwayClone.png";
import Calculatorimg from "../assets/calculator.png";
import Ecommerceimg from "../assets/E-commerce.png";
import ProjectItems from "./ProjectItems";
function Project() {
  return (
    <div id="project" className=" sm:mx-[80px] mx-[20px] my-5">
      <div className="flex justify-center text-red-600 text-2xl font-bold mb-4">
        Project
      </div>
      <div className="text-center font-sans mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        dolores dolor minima modi architecto id labore ut et animi qui sint illo
        ipsa, doloremque maiores nihil inventore temporibus debitis voluptatem.
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
        <ProjectItems
          img={BroadwayCloneimg}
          title="Broadway infosys"
          sub_title="HTML and Tailwind"
        />
        <ProjectItems
          img={Calculatorimg}
          title="Calculator"
          sub_title="HTML and Tailwind"
        />
        <ProjectItems
          img={Ecommerceimg}
          title="E-commerce"
          sub_title="HTML and CSS"
        />
      </div>
    </div>
  );
}
export default Project;
