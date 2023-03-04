import { createSlice } from '@reduxjs/toolkit';


//empty states
const initialState = {
    name: "",
    email: "",
    photo: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        //whenever a user logs in, the data should be stored
        setUserLoginDetails: (state, action) => {
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

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;


//we can get access to name, email, photo in any file
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;