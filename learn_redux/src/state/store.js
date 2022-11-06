import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";

const rootReducer = combineReducers({
  counter,
});

export const store = configureStore({
  reducer: rootReducer,
});
