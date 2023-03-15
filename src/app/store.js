//redux to store information that we fetched from google
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

// Store has all of the default middleware added, _plus_ the logger middleware
export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
