// For Redux tool kit
import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "../Test/Test10Slice"

export const store = configureStore({
    reducer: todoReducer
})

