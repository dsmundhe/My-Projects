import { configureStore } from "@reduxjs/toolkit";
import youotubeReducer from "../features/youtube/youtubeSlice";
const store = configureStore({
  reducer: {
    youtubeApp: youotubeReducer,
  },
});
export default store;
