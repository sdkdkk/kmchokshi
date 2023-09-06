import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const baseurl = process.env.REACT_APP_API_BASE_URL;

const productSlice = createSlice({
    name: "product",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true,
    },
    reducers: {
        productPending: (state) => {
            state.loading = true;
        },
        productSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.status = 1;
            state.error = null;

        },
        productFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload;
        },
    },
});
//Set-info
export const { productPending, productSuccess, productFailure } =
    productSlice.actions;

export const productApi = (id) => async (dispatch) => {
    console.log(id);
    dispatch(productPending());
    try {
        const response = await axios.get(`${baseurl}/getcategoryproduct/${id}`);
        const data = response.data;
        console.log(data);
        console.log(response.data.document);
        if (data.status === 1) {
            toast.success(data.message);
            dispatch(productSuccess(data));
        } else {
            dispatch(productFailure(data));
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.originalError);
    }
};

export default productSlice.reducer;
