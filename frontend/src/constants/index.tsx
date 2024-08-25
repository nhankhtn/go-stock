import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faNewspaper,
  faWallet,
  faGear,
  faPhone,
  faUserGroup,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { title } from "process";

export const menuNavigate = [
  {
    to: "/",
    title: "Home",
    icon: <i className='ti-home'></i>,
  },
  {
    to: "/dashboard",
    title: "Dashboard",
    icon: <i className='ti-view-grid'></i>,
  },
  {
    to: "/",
    title: "Wallet",
    icon: <i className='ti-wallet'></i>,
  },
  {
    to: "/",
    title: "News",
    icon: <i className='ti-agenda'></i>,
  },
  {
    title: "Stock & fund",
    icon: <i className='ti-bar-chart'></i>,
    children: [
      {
        to: "/",
        title: "Stock",
      },
      {
        to: "/",
        title: "Cryptocurrency",
      },
      {
        to: "/",
        title: "MutualFund",
      },
      {
        to: "/",
        title: "Gold",
      },
    ],
  },
];
export const menuConfig = [
  {
    title: "Our community",
    icon: <FontAwesomeIcon icon={faUserGroup} />,
  },
  {
    title: "Settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  {
    title: "Contact us",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
];
export const PATTERN_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
