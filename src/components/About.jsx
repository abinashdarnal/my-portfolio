import React from "react";
import Work from "./Work";
import Education from "./Education";

const Study = [
  {
    year: "2018",
    level: "SLC",
    from: "Ram Janaki Higher S.School",
    duration: "",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam ad mollitia et excepturi! Ipsum sapiente at assumenda harum eaque repellat odio culpa?",
  },
  {
    year: "2022",
    level: "D.Com",
    from: "Tribhuvan Model College",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam ad mollitia et excepturi! Ipsum sapiente at assumenda harum eaque repellat odio culpa?",
  },
];

const Experience = [
  {
    where: "Western English Medium Secondary School",
    as: "Computer Teacher",
    duration: "6 month",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam ad mollitia et excepturi! Ipsum sapiente at assumenda harum eaque repellat odio culpa?",
  },
  {
    where: "S.S infosys",
    as: "Senior Tech",
    duration: "4 month",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam ad mollitia et excepturi! Ipsum sapiente at assumenda harum eaque repellat odio culpa?",
  },
  {
    where: "Jwala Electronics",
    as: "Phone technicians",
    duration: "1.5 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam ad mollitia et excepturi! Ipsum sapiente at assumenda harum eaque repellat odio culpa?",
  },
];
function About() {
  return (
    <div id="about" className=" sm:mx-[80px] mx-[20px] my-5">
      <div className="flex justify-center text-red-600 text-2xl font-bold mb-4">
        About
      </div>
      <div className="lg:flex">
        <div>
          <div className="text-lg mb-2 font-semibold text-red-700 ">
            Education{" "}
          </div>
          {Study.map((items, idx) => (
            <Education
              key={idx}
              year={items.year}
              level={items.level}
              from={items.from}
              duration={items.duration}
              details={items.details.substring(0, 160)}
            />
          ))}
        </div>
        <div>
          <div className="text-lg mb-2 font-semibold text-red-700 ">
            Work Experience
          </div>
          {Experience.map((points, id) => (
            <Work
              key={id}
              where={points.where}
              position={points.as}
              duration={points.duration}
              details={points.details.substring(0, 160)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default About;
