import { configureStore } from "@reduxjs/toolkit";
import hostaldekhoSlice from "../features/Hostaldekho/hostaldekhoSlice";
export const store = configureStore({
  reducer: hostaldekhoSlice,
});
