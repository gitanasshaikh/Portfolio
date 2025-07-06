import React from "react";
import java from "/java.png";
import html from "/html.png";
import css from "/css.png";
import javascript from "/javascript.png";
import reactjs from "/reactjs.png";
import node from "/node.png";
import express from "/express.png";
import sql from "/sql.png";
import mongodb from "/mongodb.png";
import api from "/api.png";

function Skill() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: html,
      name: "HTMl",
    },
    {
      id: 3,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 6,
      logo: sql,
      name: "SQL",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: api,
      name: "API",
    },
  ];
  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="underline text-3xl flex justify-center font-bold mb-5">
            Skills
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img src={logo} className="w-[150px] rounded-full" alt="" />
                <div>
                  <div className="">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Skill;
