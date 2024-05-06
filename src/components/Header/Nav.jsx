import React, { useState } from "react";
import { AlignJustify,X } from "lucide-react";
import { NavLinks } from "../index"


function Nav() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <>
    <div className="w-2/5">
      <div className="mr-8 hidden bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl p-2 px-8 md:block">
        <NavLinks />
      </div>
      <div className="md:hidden flex justify-end mr-4">
        <button onClick={toggleNavbar}>{open ? <X/> : <AlignJustify/>}</button>
      </div>
    </div>
    {open &&(
        <div className="md:hidden pb-2 basis-full">
            <NavLinks
            className="flex-col items-center"
            classname="border-t-2"/>
        </div>

    )}
    </>
  );
}

export default Nav;
