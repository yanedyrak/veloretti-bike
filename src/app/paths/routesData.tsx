import { ElectricPage } from "../../page/ElectricPage";
import { KidsPage } from "../../page/KidsPage";
import { MainPage } from "../../page/MainPage";
import { AccessoriesPage } from "../../page/AccessoriesPage";

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
    name: "Kids",
    path: "/kids",
    component: <KidsPage />,
  },
  {
    name: "Accessories",
    path: "/accessories",
    component: <AccessoriesPage />,
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
