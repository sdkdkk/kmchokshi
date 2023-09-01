import { combineReducers } from "@reduxjs/toolkit";
import GethomeSliderReducer from "../Redux/GethomeSliderSlice";
import GetbrandlogoReducer from "../Redux/GetbrandlogoSlice";
import GetcollectionbannerReducer from "../Redux/GetcollectionbannerSlice";
import GetboximageReducer from "../Redux/GetboximageSlice";
import GetbranchmasterReducer from "../Redux/GetbranchmasterSlice";

const reducer = combineReducers({
  GethomeSlider: GethomeSliderReducer,
  getbrandlogo: GetbrandlogoReducer,
  collectionbanner: GetcollectionbannerReducer,
  getboximage: GetboximageReducer,
  branchmaster:GetbranchmasterReducer,
});

export default reducer;
