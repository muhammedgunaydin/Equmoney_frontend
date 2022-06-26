import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  balance: '',
};

const balanceSlice = createSlice({
  name: 'balanceCalcu',
  initialState,
  reducers: {
    getBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const {getBalance} = balanceSlice.actions;
export default balanceSlice.reducer;
