//Create a Redux State Slice
//This user state slice is for getting user
import { createSlice } from '@reduxjs/toolkit';

//initial state value
const initialState = {
    name: "",
    email: "",
    photo: "",
};

//userSlice is string name to identify the slice
const userSlice = createSlice({
    name: "user",
    initialState,

    //Reducer function is to define how the state can be updated
    reducers: {
        /*
        Redux Toolkit allows us to write "mutating" logic in reducers. It
        doesn't actually mutate the state because it uses the Immer library,
        which detects changes to a "draft state" and produces a brand new
        immutable state based off those changes
        */

        //Get a user's profile
        //whenever a user logs in, the data should be stored
        setUserLoginDetails: (state, action) => {

            //Getting user's profile details.
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        //whenever a user logout, the data should be removed
        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
})

// Action creators are generated for each case reducer function.
//exporting the generated Redux action creators and the reducer function for the whole slice.
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;


//we can get access to name, email, photo in any file
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;