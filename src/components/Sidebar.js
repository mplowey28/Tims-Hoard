import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarData } from "./SidebarData";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="bg-blue-900 h-10 flex justify-start items-center">
        <Link to="#" className="ml-8 text-4xl bg-transparent">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={
          sidebar
            ? "bg-blue-900 w-50 h-screen flex justify-center fixed -top-0 -left-0 transition duration-350"
            : "bg-blue-900 w-50 h-screen flex justify-center fixed -top-0 -left-full transition duration-850"
        }
      >
        <ul className="w-full" onClick={showSidebar}>
          <li className="bg-blue-900 h-10 flex justify-start items-center">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-start items-center py-2 pr-0 pl-4 list-none h-10"
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
