import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/login/reducer"
import notebookReducer from "./modules/notebookLMInterface//reducer"

const rootReducer = combineReducers({
  authReducer,
  notebookReducer
});

export default rootReducer;
