import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

// import { logoutIfInvalidToken } from "../../helpers/handleError";

const baseurl = process.env.REACT_APP_API_BASE_URL

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const homeslider = createAsyncThunk(
  "homeslider/homesliderList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/homesliderall`
      );
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const GethomeSliderSlice = createSlice({
  name: "homeslider",
  initialState,
  extraReducers: {
    [homeslider.pending]: (state) => {
      state.isLoading = true;
    },
    [homeslider.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [homeslider.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GethomeSliderSlice.reducer;
