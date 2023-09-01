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

export const brandlogo = createAsyncThunk(
  "brandlogo/brandlogoList",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseurl}/brandlogoall`
      );
      return response.data;
    } catch (error) {
      // logoutIfInvalidToken(error.response)
      return rejectWithValue(error.message);
    }
  }
);

export const GetbrandlogoSlice = createSlice({
  name: "brandlogo",
  initialState,
  extraReducers: {
    [brandlogo.pending]: (state) => {
      state.isLoading = true;
    },
    [brandlogo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [brandlogo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default GetbrandlogoSlice.reducer;
