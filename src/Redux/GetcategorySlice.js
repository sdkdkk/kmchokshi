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

export const getcategory = createAsyncThunk(
  "getcategories/getcategoriesList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/getcategory`
      );
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const GetcategorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getcategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getcategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getcategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GetcategorySlice.reducer;
