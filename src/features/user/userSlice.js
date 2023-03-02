import createSlice from '@reduxjs/toolkit';

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

    }
})