//redux to store information that we fetched from google
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducer';
import userReducer from "../features/user/userSlice";

// Store has all of the default middleware added, _plus_ the logger middleware
export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
