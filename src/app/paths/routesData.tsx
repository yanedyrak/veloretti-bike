import { ElectricPage } from "../../page/ElectricPage";
import { KidsPage } from "../../page/KidsPage";
import { MainPage } from "../../page/MainPage";
import { AccessoriesPage } from "../../page/AccessoriesPage";
import { LeasingPage } from "../../page/LeasingPage";

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
    name: "Leasing",
    path: "/leasing",
    component: <LeasingPage />,
  },
];
