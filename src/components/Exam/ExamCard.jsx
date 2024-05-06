import React from "react";
import { Link } from "react-router-dom";

function ExamCard({
  Label = "Enter Label",
  Path,
  className = "",
  classname = "",
}) {
  return (
    <div className={`w-full hover:scale-105 px-20 items-center flex flex-wrap ${className}`}>
      <div className={`w-full ${classname} md:w-2/5`}>
        <Link
          to={Path}
          className="flex h-36 hover:text-black w-full  mb-5 cursor-pointer hover:bg-white hover:bg-opacity-30 backdrop-blur-2xl text-center rounded-2xl shadow-2xl items-center justify-center"
        >
          <div className="">
            <h1 className="font-bold md:mb-2 md:mr-0 text-white hover:text-black text-sm md:text-2xl">
              {Label}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ExamCard;
