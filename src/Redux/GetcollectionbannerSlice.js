import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

// import { logoutIfInvalidToken } from "../../helpers/handleError";

// const url = process.env.REACT_APP_API_BASE_URL;

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const collectionbanner = createAsyncThunk(
  "collectionbanner/collectionbannerList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://kmchoksi.onrender.com/api/admin/collectionbannerall`
      );
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const GetcollectionbannerSlice = createSlice({
  name: "brandlogo",
  initialState,
  extraReducers: {
    [collectionbanner.pending]: (state) => {
      state.isLoading = true;
    },
    [collectionbanner.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [collectionbanner.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GetcollectionbannerSlice.reducer;
