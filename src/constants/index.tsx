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
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    to: "/dashboard",
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    to: "/",
    title: "Wallet",
    icon: <FontAwesomeIcon icon={faWallet} />,
  },
  {
    to: "/",
    title: "News",
    icon: <FontAwesomeIcon icon={faNewspaper} />,
  },
  {
    title: "Stock & fund",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
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
