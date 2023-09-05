import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const baseurl = process.env.REACT_APP_API_BASE_URL

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const newsevent = createAsyncThunk(
  "newsevent/newseventList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/eventall`
      );
      return response.data;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const GetnewseventSlice = createSlice({
  name: "homeslider",
  initialState,
  extraReducers: {
    [newsevent.pending]: (state) => {
      state.isLoading = true;
    },
    [newsevent.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [newsevent.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GetnewseventSlice.reducer;
