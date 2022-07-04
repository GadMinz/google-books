import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = "AIzaSyCQqLIlZ-MqNe2hLnpRsWwrpEVpx85Knk8";
export const fetchBooks = createAsyncThunk(
  "book/fetchBookStatus",
  async (params) => {
    const { searchValue } = params;
    console.log(searchValue);
    const { items } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${apiKey}`
    );
    return items;
  }
);

const initialState = {
  items: [],
  status: "loading", //loading, success, error
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchBooks.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export default bookSlice.reducer;
