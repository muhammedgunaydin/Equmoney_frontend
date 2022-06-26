import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  expens: [],
};

const calcuSlice = createSlice({
  name: 'expCalcu',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.expens = action.payload;
    },
    pay: (state, action) => {
      state.expens[action.payload].paid = true;
    },
    removeData: (state, action) => {
      state.expens = state.expens.filter(el => el.uniq !== action.payload);
    },
  },
});

export const {addData, removeData, pay} = calcuSlice.actions;
export default calcuSlice.reducer;
