import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const catogriesSlice = createSlice({
  name: 'catogries',
  initialState,
  reducers: {
    checkStatus() {
      return 'Under Construction';
    },
  },
});

export const { checkStatus } = catogriesSlice.actions;
export default catogriesSlice.reducer;
