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

export const Allbrand = createAsyncThunk(
  "allbrand/allbrandList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/brandall`
      );
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const GetallbrandSlice = createSlice({
  name: "allbrand",
  initialState,
  extraReducers: {
    [Allbrand.pending]: (state) => {
      state.isLoading = true;
    },
    [Allbrand.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [Allbrand.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GetallbrandSlice.reducer;
