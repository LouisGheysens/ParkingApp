import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchParkings = createAsyncThunk("parkings/fetch", async () => {
  const response = await Axios({
    url: "https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=name&facet=lastupdate&facet=description&facet=categorie",
    method: "GET",
  });
  return response.data;
});

const parkingSlice = createSlice({
  name: "parkings",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchParkings.pending]: (state, action) => {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    },
    [fetchParkings.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    [fetchParkings.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const { reducer } = parkingSlice;
