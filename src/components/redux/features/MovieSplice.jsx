import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("movie/fetchData", async () => {
  const api_key = "070899656df8d3a6ee25fecdf23183b7";
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&media_type=movie`
  );
  const data = await response.json();
  return data;
});

export const videoDataSlice = createSlice({
  name: "videoData",
  initialState: {
    status: "idle",
    videoData: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // console.log(action.payload);
      state.videoData = state.videoData.concat(action.payload);
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default videoDataSlice.reducer;
