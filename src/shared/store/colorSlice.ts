import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ColorState = {
  value: string;
};
export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "",
  },
  reducers: {
    setColor: (state: ColorState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setColor } = colorSlice.actions;
