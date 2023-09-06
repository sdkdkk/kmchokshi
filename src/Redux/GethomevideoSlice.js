import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const baseurl = process.env.REACT_APP_APIS_BASE_URL;

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const homevideo = createAsyncThunk(
  "homevideo/homevideoList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://kmchoksi.onrender.com/api/admin/videoall`
      );
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const GethomevideoSlice = createSlice({
  name: "homevideo",
  initialState,
  extraReducers: {
    [homevideo.pending]: (state) => {
      state.isLoading = true;
    },
    [homevideo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [homevideo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GethomevideoSlice.reducer;
