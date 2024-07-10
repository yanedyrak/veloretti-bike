import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AccessoryType = {
  image: string;
  title: string;
  price: number;
};
type initialState = {
  value: AccessoryType[];
};
const initialState: initialState = {
  value: [],
};
export const accessoriesSlice = createSlice({
  name: "accessories",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AccessoryType>) => {
      state.value.find((item) => item.title === action.payload.title)
        ? state.value.filter((item) => item.title !== action.payload.title)
        : state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<AccessoryType>) => {
      state.value = state.value.filter(
        (item) => item.title !== action.payload.title
      );
    },
  },
});

export const { add, remove } = accessoriesSlice.actions;
