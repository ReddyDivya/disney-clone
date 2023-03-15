//Redux store
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

// Store has all of the default middleware added, _plus_ the logger middleware.
//This creates a Redux store, and also automatically configure the Redux DevTools extension.
export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
