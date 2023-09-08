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
import productReducer from "../Redux/productSlice";
import GethomevideoReducer from "../Redux/GethomevideoSlice";
import weblogoimageReducer from "../Redux/weblogoimageSlice";
import getProductReducer from "../Redux/getProductSlice";

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
  Getnewsevent: GetnewseventReducer,
  product: productReducer,
  Gethomevideo: GethomevideoReducer,
  weblogoimage: weblogoimageReducer,
  getproduct: getProductReducer,
});

export default reducer;
