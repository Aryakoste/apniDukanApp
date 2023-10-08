import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isVendor: false,
        isAuth: false,
        tryLogin: false
    },
    reducers: {
        setIsVendor: (state, action) => {
            state.isVendor = action.payload.isVendor
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload.isAuth
        },  
        setTryLogin: (state, action) => {
            state.tryLogin = action.payload.tryLogin
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;