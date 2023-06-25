import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slices/movies"

const reducer = {
    movies: movieReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true
})

export default store