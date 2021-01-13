import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#4B5563" }}>
        <div className="bg-yellow-600 h-10 flex justify-start items-center w-screen">
          <Link to="#" className="ml-4 text-4xl bg-transparent">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          className={
            sidebar
              ? "bg-yellow-600 w-52 h-screen flex justify-center fixed -top-0 -left-0 transition duration-350"
              : "bg-yellow-600   w-52 h-screen flex justify-center fixed -top-0 -left-full transition duration-850"
          }
        >
          <ul className="w-full" onClick={showSidebar}>
            <li className="bg-yellow-600  h-10 flex justify-start items-center">
              <Link to="#" className="ml-4 text-4xl bg-transparent">
                <AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="justify-start items-center py-2 pr-0 pl-4 list-none h-18 text-gray-600 hover:bg-yellow-500"
                >
                  <Link
                    to={item.path}
                    className="flex no-underline text-lg w-11/12 h-full items-center px-2"
                  >
                    {item.icon}
                    <span className="pl-4">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
