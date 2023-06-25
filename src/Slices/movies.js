import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieDataService from "../Services/MovieService";

const initialState = {}

export const retrieveMovies = createAsyncThunk("movies/retrieve", async () => {
    const res = await MovieDataService.getAll()
    return res.data
})

export const findMoviesByTitle = createAsyncThunk("movies/findByTitle", async ({ title }) => {
    const res = await MovieDataService.findByTitle(title)
    return res.data
})

const movieSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers: {
        [retrieveMovies.fulfilled]: (state, action) => {
            return action.payload
        },
        [findMoviesByTitle.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

const { reducer } = movieSlice
export default reducer