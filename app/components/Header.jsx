"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "../data.js"; 
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  console.log(pathname);

  const handleLinkClick = () => {
    setIsMenu(false); // Close the menu when a link is clicked
  };

  return (
    <div className="bg-white shadow-lg h-16 flex justify-between items-center md:px-[10%]">
      <Link
        href="/"
        className="text-third-color font-bold text-2xl pl-5 md:pl-0"
      >
        CruiseWheel
      </Link>
      <div
        className="md:hidden flex flex-col gap-1 pr-5"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </div>
      <div
        className={` ${
          isMenu ? "flex flex-col absolute top-16 w-full" : "hidden md:flex"
        } gap-5 md:flex-row md:static bg-white md:w-auto text-center z-10`}
      >
        {links?.map((link) => (
          <div key={link.link}>
            <Link
              className={`${
                pathname === link.link ? "text-third-color" : "text-gray-400"
              }`}
              href={link.link}
              onClick={handleLinkClick}
            >
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
