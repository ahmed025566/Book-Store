import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import catogriesReducer from './catogries/catgoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    catogries: catogriesReducer,
  },
});

export default store;
