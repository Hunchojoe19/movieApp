import { configureStore } from "@reduxjs/toolkit";
import { videoDataSlice } from "../features/MovieSplice";
const store = configureStore({
  reducer: {
    videoData: videoDataSlice,
  },
});
export default store;
