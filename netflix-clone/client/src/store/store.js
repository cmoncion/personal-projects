import { configureStore } from "@reduxjs/toolkit";
import movieSlice from '../features/movieSlice'
import authSlice from "../features/authSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice,
        auth: authSlice
    }
})