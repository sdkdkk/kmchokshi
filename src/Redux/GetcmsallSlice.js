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

export const cmslist = createAsyncThunk(
  "getcms/getcmsList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/getcms`
      );
      return response.data;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const GetcmsallSlice = createSlice({
  name: "brandlogo",
  initialState,
  extraReducers: {
    [cmslist.pending]: (state) => {
      state.isLoading = true;
    },
    [cmslist.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [cmslist.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GetcmsallSlice.reducer;
