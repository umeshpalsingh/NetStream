import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        loading: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames,
            state.movieResults = movieResults,
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult, setLoading} = gptSlice.actions

export default gptSlice.reducer