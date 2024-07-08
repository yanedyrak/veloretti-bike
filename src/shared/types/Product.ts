import { AccessoriesCategories } from "./Accessory";

type Photo = string;

type Color = {
  id: number;
  name: string;
  photos: Photo[];
};

export type Product = {
  id: number;
  title: string;
  riderHeight: string;
  price: number;
  description: string;
  category: string;
  image: string;
  color: Color[];
  accessories: AccessoriesCategories[];
};
