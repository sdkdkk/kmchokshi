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

export const weblogo = createAsyncThunk(
  "weblogo/weblogoList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://kmchoksi.onrender.com/api/admin/logo`);
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const weblogoimageSlice = createSlice({
  name: "weblogo",
  initialState,
  extraReducers: {
    [weblogo.pending]: (state) => {
      state.isLoading = true;
    },
    [weblogo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [weblogo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default weblogoimageSlice.reducer;
