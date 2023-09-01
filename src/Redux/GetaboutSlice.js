import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

// import { logoutIfInvalidToken } from "../../helpers/handleError";

const baseurl = process.env.REACT_APP_API_BASE_URL;

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const Getabout = createAsyncThunk(
  "getabout/getaboutList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/aboutall`
      );
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const GetaboutSlice = createSlice({
  name: "brandlogo",
  initialState,
  extraReducers: {
    [Getabout.pending]: (state) => {
      state.isLoading = true;
    },
    [Getabout.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [Getabout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GetaboutSlice.reducer;
