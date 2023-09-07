import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface APIState {
    url:string,
};

const initialState:APIState = {
    url:"http://localhost:8888/api/",
};

export const APISlice = createSlice({
    name:'API',
    initialState,
    reducers:{
    }
});
export default APISlice.reducer;