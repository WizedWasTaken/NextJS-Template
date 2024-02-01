"use client";

// Imports
import React, { useState } from "react";
import NavLinks from "@/components/ui/sidebar/nav-links";
import { Button } from "@/components/ui/button";
import DarkModeButton from "@/components/ui/dark-mode-button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const Sidebar: React.FC = () => {
  const [isShown, setIsShown] = useState(false);

  // Toggle Ny Sidebar
  const toggleSidebar = () => {
    setIsShown(!isShown);
  };

  return (
    <nav className="relative flex">
      <div
        className={`transition-all duration-200 ease-in-out transform overflow-x-hidden ${
          isShown ? "w-64" : "w-10"
        } h-full bg-gray-300 text-black dark:bg-gray-800 dark:text-white flex flex-col items-center justify-start py-5 space-y-5 overflow-auto border-r-4 border-black dark:border-gray-500`}
      >
        {/* Titel */}
        <h1
          className={`text-2xl font-bold text-center transition-transform duration-500 ease-in-out whitespace-nowrap ${
            isShown ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          Websidey
        </h1>
        {/* Dark Mode Knap */}
        <div
          className={`transform transition-transform duration-500 ease-in-out ${
            isShown ? "translate-x-0" : "-translate-x-full "
          }`}
        >
          <DarkModeButton />
        </div>
        {/* Links til nye sider */}
        <div
          className={` transition-transform duration-500 ease-in-out whitespace-nowrap ${
            isShown ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <NavLinks isShown={isShown} />
        </div>
      </div>
      {/* Undskyld for det her styling */}
      {/* Åben sidebar */}
      {/* <Button className="m-5 absolute right-[-7rem]" onClick={toggleSidebar}>
        Sidebar
      </Button> */}

      <Button
        onClick={toggleSidebar}
        className="fixed top-5 right-5 z-50 flex items-center justify-center p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
      >
        {isShown ? (
          <Cross1Icon className="h-6 w-6 transition-transform transform rotate-90" />
        ) : (
          <HamburgerMenuIcon className="h-6 w-6 transition-transform" />
        )}
      </Button>
    </nav>
  );
};

export default Sidebar;
