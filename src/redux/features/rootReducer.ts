import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import baseApi from "../api/baseApi";
import authReducer from "@/redux/features/authSlice/authSlice";
import cartReducer from "./cart/cartSlice";
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
