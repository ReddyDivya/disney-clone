## Demo

[Disney+ Clone](https://rd-disneyplusclone.netlify.app/)

## Redux 

### 1. Create a Redux store with configureStore
configureStore accepts a reducer function as a named argument.
configureStore automatically sets up the store with good default settings.

### 2. Provide the Redux store to the React application components
Put a React-Redux <Provider> component around your <App />
Pass the Redux store as <Provider store={store}>

###3. Create a Redux "slice" reducer with createSlice
Call createSlice with a string name, an initial state, and named reducer functions
Reducer functions may "mutate" the state using Immer
Export the generated slice reducer and action creators

###4. Use the React-Redux useSelector/useDispatch hooks in React components
Read data from the store with the useSelector hook
Get the dispatch function with the useDispatch hook, and dispatch actions as needed
