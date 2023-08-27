import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import FadeInText from "./FadeInText";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isOpen ? "relative w-64" : "fixed w-0"
        }`}
      />
      <div
        className={`flex transition-all duration-300 ${
          isOpen ? "fixed" : "fixed"
        }`}
      >
        {/* Sidebar */}
        {
          <div
            className={`w-64 bg-base-100 h-screen border-accent border-r-2 transition-all duration-300 transform ${
              isOpen ? "translate-x-0" : "-translate-x-64 w-0"
            }`}
          >
            <div className="mt-20 w-full px-2">
              <h2 className="ml-5 text-white font-bold mb-2">History</h2>
              <FadeInText
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque, obcaecati voluptatibus quaerat vero quae illum molestiae. Debitis, dolorum vel?"
                }
              />
            </div>
          </div>
        }
        <div className={`transition-all duration-300`}>
          {/* Button to toggle the sidebar */}
          <div className="flex fixed top-3 left-3 z-10 items-center justify-around cursor-pointer">
            <button
              onClick={toggleSidebar}
              className="p-3 bg-base-100 border-primary border-2 text-white rounded-md"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
            </button>
            {isOpen && (
              <div className="p-3 pr-5 ml-5 font-medium flex items-center justify-between w-[140px] rounded-md bg-primary hover:scale-105">
                <AiOutlinePlus className="text-white" />
                <h1 className="text-sm text-white">New Chat</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
