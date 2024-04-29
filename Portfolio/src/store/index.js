import tabSlice from "./navbar/navbarLink";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        tabSlice:tabSlice.reducer
    }
});
export default store;