/*
Creates a Redux store that holds the complete state tree of our app.
There should only be a single store in your app.
*/

import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import userReducer from "../features/user/userSlice"; //importing user slice
import movieReducer from "../features/movie/movieSlice"; //importing movie slice

// Store has all of the default middleware added, _plus_ the logger middleware.
//This creates a Redux store, and also automatically configure the Redux DevTools extension.
export default configureStore({
    reducer: {
        //Adding Slice Reducers to the Store to handle all updates to that state.
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
