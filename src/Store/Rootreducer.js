import { combineReducers } from "@reduxjs/toolkit";
import GethomeSliderReducer from "../Redux/GethomeSliderSlice";
import GetbrandlogoReducer from "../Redux/GetbrandlogoSlice";


const reducer = combineReducers({
    GethomeSlider: GethomeSliderReducer,
    getbrandlogo: GetbrandlogoReducer,
});

export default reducer;
