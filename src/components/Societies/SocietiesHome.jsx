import React from "react";
import { NavLink } from "react-router-dom";
import Cult from "./images/Cultural.jpeg";
import Tech from "./images/Technical.jpeg";

function SocietiesHome() {
  return (
    <div className="h-fit">
      <div className="flex-wrap w-full h-fit items-center justify-evenly mt-20 flex-col">
        <div className="flex flex-col md:flex-row h-150 flex-wrap w-full p-10 items-center justify-center">
          <div className="w-full">
            <NavLink
              to="/CulturalSocieties"
              className="flex flex-wrap cursor-pointer shadow-lg w-full hover:scale-105 max-w-3xl mx-auto rounded-3xl mb-10 h-40 md:h-60 items-center justify-cenyer bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${Cult})` }}
            >
              <div className="md:mb-20">
                <p className="text-black bg-white bg-opacity-40 backdrop-blur-sm px-3 font-bold mx-auto text-2xl md:text-3xl">
                  Cultural Societies
                </p>
              </div>
            </NavLink>
          </div>
          <div className="w-full">
            <NavLink
              to="/TechnicalSocieties"
              className="flex flex-wrap cursor-pointer shadow-lg w-full hover:scale-105 mx-auto max-w-3xl rounded-3xl mb-5 h-40 md:h-60 items-center justify-cenyer bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${Tech})` }}
            >
              <div className="md:mb-20">
                <p className="text-black bg-white bg-opacity-40 backdrop-blur-sm px-3 font-bold mx-auto text-2xl md:text-3xl">
                  Technical Societies
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocietiesHome;
