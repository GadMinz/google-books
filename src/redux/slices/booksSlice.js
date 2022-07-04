import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = "AIzaSyCQqLIlZ-MqNe2hLnpRsWwrpEVpx85Knk8";
export const fetchBooks = createAsyncThunk(
  "book/fetchBookStatus",
  async (params) => {
    const { searchValue, orderBy } = params;
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}${orderBy}&maxResults=30&key=${apiKey}`
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
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
      state.items = [];
      state.totalItems = 0;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.status = "success";
    },
    [fetchBooks.rejected]: (state) => {
      state.status = "error";
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export default bookSlice.reducer;
