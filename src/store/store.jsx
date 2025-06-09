import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counter/counterSlice";

const store = configureStore({
    reducer : {
         Counter : counterReducer,
    }
});
export default store;