import { configureStore } from "@reduxjs/toolkit";
import { drawerSlice } from "./drawerSlice";
import { colorSlice } from "./colorSlice";
import { careSlice } from "./careSlice";
import { accessoriesSlice } from "./accessoriesSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice.reducer,
    color: colorSlice.reducer,
    care: careSlice.reducer,
    accessories: accessoriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
