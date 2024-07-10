import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Standard",
  price: 0,
};
export const careSlice = createSlice({
  name: "care",
  initialState,
  reducers: {
    change: (state, action) => {
      state.title = action.payload.title;
      state.price = action.payload.price;
    },
  },
});

export const { change } = careSlice.actions;
