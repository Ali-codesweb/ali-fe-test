import { configureStore } from "@reduxjs/toolkit";
import homeScreenReducer from "./screens/HomeScreen/slice";
export const mainStore = configureStore({
  reducer: {
    homeScreenSlice: homeScreenReducer,
  },
});
