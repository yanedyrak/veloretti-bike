import { ElectricPage } from "../../page/ElectricPage";
import { MainPage } from "../../page/MainPage";

export const routesData = [
  {
    name: "Home",
    path: "/",
    component: <MainPage />,
  },
  {
    name: "About",
    path: "/electric",
    component: <ElectricPage />,
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
