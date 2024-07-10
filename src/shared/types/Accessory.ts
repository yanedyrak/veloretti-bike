export type AccessoriesCategories = {
  title: string;
  accessories: AccessoryType[];
};
export type AccessoryType = {
  id: number;
  soldOut: boolean;
  image: string;
  title: string;
  price: string;
};
