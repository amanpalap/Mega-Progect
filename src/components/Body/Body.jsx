import React from "react";
import art from "./Images/digital_artist.png";
import bg from "./Images/hobg.jpg";
import Logo from "./Images/Logo.png";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="h-fit">
      <div className="bg-transparent w-full hidden md:flex h-20"></div>
      <div className="bg-transparent w-full justify-center flex flex-wrap mx-auto">
        <div className="w-full flex mt-5 md:mt-0 flex-wrap">
          <div
            className="flex flex-wrap items-center h-96 justify-center w-full mx-10 px-6 py-10 rounded-2xl opacity-84 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="w-full flex flex-row flex-wrap items-center justify-between">
              <div className="w-full flex flex-wrap justify-center">
                <div className="w-full flex flex-wrap justify-center">
                  <img className="w-40" src={Logo} alt="wait..." />
                </div>
                <div className="w-1/2 flex flex-wrap text-center mt-8 justify-center">
                  <p className="text-white">
                  College Life, Decoded: Your Daily Dose of Campus Chronicles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full m-10 rounded-xl p-4">
            <div className="backdrop-blur-2xl rounded-xl text-center items-center justify-center py-2 text-white font-extrabold text-2xl">
              <p>Latest Updates</p>
            </div>
            <div className="text-lg flex flex-wrap justify-center items-center text-white rounded-2xl text-center py-4 px-10">
              <Link
              to="/Vecell"
              className="w-full backdrop-blur-xl mx-2 hover:bg-white items-center flex flex-wrap justify-center h-20 max-w-sm hover:bg-opacity-30 rounded-xl hover:text-blue-300"
              >
               <p>Dhristi by Ve-cell</p>
              </Link>
               
              <Link
              to="/BB"
              className="w-full  backdrop-blur-xl mx-2 hover:bg-white items-center flex flex-wrap justify-center h-20 max-w-sm hover:bg-opacity-30 rounded-xl hover:text-blue-300"
              >
               <p>Fit India Week</p>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
