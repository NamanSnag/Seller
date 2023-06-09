import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:null,
    token:null,
}

const authSclice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
    }
})

export const { setLogin, setLogout } = authSclice.actions;

export default authSclice.reducer;