//Create a Redux State Slice
//This movie state slice is for getting movies
import { createSlice } from "@reduxjs/toolkit";

//initial state value
const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
}

//movieSlice is string name to identify the slice
const movieSlice = createSlice({
    name: 'movie',
    initialState,

    //Reducer function is to define how the state can be updated.
    reducers: {
        /*
        Redux Toolkit allows us to write "mutating" logic in reducers. It
        doesn't actually mutate the state because it uses the Immer library,
        which detects changes to a "draft state" and produces a brand new
        immutable state based off those changes
        */
        //Getting movies information
        setMovies: (state, action) => {

            //Getting every movie details.
            state.recommend = action.payload.recommend
            state.newDisney = action.payload.newDisney
            state.original = action.payload.original
            state.trending = action.payload.trending
        },
    }
});

// Action creators are generated for each case reducer function.
//exporting the generated Redux action creators and the reducer function for the whole slice.
export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;


export default movieSlice.reducer;