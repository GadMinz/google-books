import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = "AIzaSyCQqLIlZ-MqNe2hLnpRsWwrpEVpx85Knk8";
export const fetchBooks = createAsyncThunk(
  "book/fetchBookStatus",
  async (params) => {
    const { searchValue, orderBy, subject } = params;
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}${subject}${orderBy}&maxResults=30&key=${apiKey}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  totalItems: 0,
  status: "success", //loading, success, error
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    removeItems(state) {
      state.items = [];
      state.totalItems = 0;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const items = Array.isArray(action.payload.items) ? action.payload.items : []
      state.items.push(...items);
      state.totalItems = action.payload.totalItems;
      state.status = "success";
    },
    [fetchBooks.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { removeItems } = bookSlice.actions;
export default bookSlice.reducer;
