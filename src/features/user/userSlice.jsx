import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: null,
        isLogIn: false,
        name: null,
        id: null
    },

    reducers: {
        toLogIn: (state, actions) => {
            state.login = actions.payload.login
            state.isLogIn = true;
            state.id = actions.payload.id 
            state.name = actions.payload.name
            console.log('to login', actions)
        },
        toLogOut: (state) => {
            state.login = null
            state.isLogIn = false
        },
    }

})


export const selectUserLogin = (state) => state.user.login;
export const selectUserName = (state) => state.user.name;
export const selectUserIsLogIn = (state) => state.user.isLogIn;
export const {toLogIn, toLogOut} = userSlice.actions;

export default userSlice.reducer;