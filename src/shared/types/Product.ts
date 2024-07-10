import { AccessoriesCategories } from "./Accessory";
import { Product } from "../../entities/product/Product";

export type Color = {
  value: string;
  images: string[];
};
type ProductModel = {
  id: number;
  name: string;
  image: string;
};
export type Product = {
  id: number;
  title: string;
  riderHeight: string;
  price: number;
  models: ProductModel[];
  images: string[];
  colors: Color[];
  accessories: AccessoriesCategories[];
};
