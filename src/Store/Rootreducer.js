import { combineReducers } from "@reduxjs/toolkit";
import GethomeSliderReducer from "../Redux/GethomeSliderSlice";
import GetbrandlogoReducer from "../Redux/GetbrandlogoSlice";
import GetcollectionbannerReducer from "../Redux/GetcollectionbannerSlice";
import GetboximageReducer from "../Redux/GetboximageSlice";
import GetbranchmasterReducer from "../Redux/GetbranchmasterSlice";
import GetaboutReducer from "../Redux/GetaboutSlice";
import GetallbrandReducer from "../Redux/GetallbrandSlice";
import GetcmsallReducer from "../Redux/GetcmsallSlice";
import GetcategoryReducer from "../Redux/GetcategorySlice";
import GettestimonialReducer from "../Redux/GettestimonialSlice";
import GetnewseventReducer from "../Redux/GetnewseventSlice";

const reducer = combineReducers({
  GethomeSlider: GethomeSliderReducer,
  getbrandlogo: GetbrandlogoReducer,
  collectionbanner: GetcollectionbannerReducer,
  getboximage: GetboximageReducer,
  branchmaster: GetbranchmasterReducer,
  Getabout: GetaboutReducer,
  Getallbrand: GetallbrandReducer,
  Getcmsall: GetcmsallReducer,
  Getcategory: GetcategoryReducer,
  Gettestimonial: GettestimonialReducer,
  Getnewsevent:GetnewseventReducer
});

export default reducer;
