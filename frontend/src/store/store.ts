import {configureStore} from "@reduxjs/toolkit";
import APISlice from "./features/API/API";
const store = configureStore({
    reducer:{API:APISlice},
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

