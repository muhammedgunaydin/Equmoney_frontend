import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
  userID: null,
};

const authSlice = createSlice({
  name: 'authFlow',
  initialState,
  reducers: {
    getUser(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
      state.userID = action.payload.userID;
    },
    outUser(state) {
      state.email = null;
      state.isLoggedIn = false;
      state.userID = null;
    },
  },
});

export const {getUser, outUser} = authSlice.actions;

export const selectIsLoggedIn = state => state.authFlow.isLoggedIn;
export const selectID = state => state.authFlow.userID;

export default authSlice.reducer;
