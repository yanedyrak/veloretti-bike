import { AccessoriesCategories } from "./Accessory";
import { Product } from "../../entities/product/Product";

type Color = {
  value: string;
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
