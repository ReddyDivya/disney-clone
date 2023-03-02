//redux to store information that we fetched from google
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducer';


// Store has all of the default middleware added, _plus_ the logger middleware
export default configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
