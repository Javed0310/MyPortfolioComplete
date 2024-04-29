import {createSlice} from "@reduxjs/toolkit";
const tabSlice = createSlice({
    name:"tabSlice",
    initialState:"Home",
    reducer:{
        setTabSlice:(store,action)=>{
            return action.payload;
        }
    }
});

export const tabAction = tabSlice.actions;
export default tabSlice;