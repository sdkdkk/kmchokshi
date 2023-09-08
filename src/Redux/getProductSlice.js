import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const baseurl = process.env.REACT_APP_API_BASE_URL;

const getproductSlice = createSlice({
    name: "getproduct",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true,
    },
    reducers: {
        getproductPending: (state) => {
            state.loading = true;
        },
        getproductSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.status = 1;
            state.error = null;

        },
        getproductFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload;
        },
    },
});
//Set-info
export const { getproductPending, getproductFailure, getproductSuccess } =
    getproductSlice.actions;

export const productIdApi = (id) => async (dispatch) => {
    console.log(id);
    dispatch(getproductPending());
    try {
        const response = await axios.get(`${baseurl}/product/${id}`);
        const data = response.data;
        console.log(data);
        console.log(response.data.document);
        if (data.status === 1) {
            toast.success(data.message);
            dispatch(getproductSuccess(data));
        } else {
            dispatch(getproductFailure(data));
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.originalError);
    }
};

export default getproductSlice.reducer;
