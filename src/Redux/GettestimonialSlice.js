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

export const testimonialmaster = createAsyncThunk(
  "testimonial/testimonialList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/testimonialall`
      );
      return response.data;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const GettestimonialSlice = createSlice({
  name: "restimonial",
  initialState,
  extraReducers: {
    [testimonialmaster.pending]: (state) => {
      state.isLoading = true;
    },
    [testimonialmaster.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [testimonialmaster.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GettestimonialSlice.reducer;
