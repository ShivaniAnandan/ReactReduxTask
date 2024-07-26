import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice';

export const ProductStore = configureStore({
    reducer:{
        cart:productReducer
    }
})