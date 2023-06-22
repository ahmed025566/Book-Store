import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ID = 'Sl91FwmfHqeWxC6TXsdA';
const BOOKS_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BOOKS_URL);

    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (payload) => {
  try {
    await axios.post(BOOKS_URL, payload);

    return payload;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    axios.delete(`${BOOKS_URL}/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
});
const initialState = {
  books: [],
  loading: false,
  erorr: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        const data = Object.values(payload);
        const ids = Object.keys(payload);
        for (let i = 0; i < data.length; i += 1) {
          data[i][0].id = ids[i];
        }
        state.books.push(data);

        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, { payload }) => {
        state.loading = false;
        state.erorr = payload;
      });
  },

});

export default bookSlice.reducer;
