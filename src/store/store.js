import { configureStore } from "@reduxjs/toolkit";
import videoSliceReducer from './videoSlice';

const store = configureStore({
    reducer:{
        video:videoSliceReducer
    }
})

export default store;