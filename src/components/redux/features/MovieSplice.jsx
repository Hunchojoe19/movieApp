import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const videoDataSlice = createSlice({
  name: "videoData",
  initialState: {
    videoData: [],
    error: null,
  },
  reducers: {},
});

export default videoDataSlice.reducer;
