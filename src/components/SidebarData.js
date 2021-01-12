import { AiFillHome } from "react-icons/ai";
import { GiMetalBar } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { ImCoinDollar, ImCoinYen } from "react-icons/im";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Silver",
    path: "/silver",
    icon: <GiMetalBar />,
  },
  {
    title: "Gold",
    path: "/gold",
    icon: <GiMetalBar />,
  },
  {
    title: "US Paper",
    path: "/uspaper",
    icon: <FaRegMoneyBillAlt />,
  },
  {
    title: "US Coin",
    path: "/uscoin",
    icon: <ImCoinDollar />,
  },
  {
    title: "World Coin",
    path: "/worldcoin",
    icon: <ImCoinYen />,
  },
];
