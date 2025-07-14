import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/login/reducer"

const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;
