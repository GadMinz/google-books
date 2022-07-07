import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setStartIndex } from "./filterSlice";
const apiKey = "AIzaSyCQqLIlZ-MqNe2hLnpRsWwrpEVpx85Knk8";

export const fetchBooks = createAsyncThunk(
  "book/fetchBookStatus",
  async (params, { dispatch }) => {
    const { searchValue, sort, category, startIndex } = params;
    const orderBy = sort !== "relevance" ? `&orderBy=${sort}` : "";
    const subject = category !== "all" ? `+subject:${category}` : "";
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}${subject}${orderBy}&startIndex=${startIndex}&maxResults=30&key=${apiKey}`
    );
    if (data.totalItems > 0 && data.items === undefined) {
      dispatch(setStartIndex(data.totalItems));
      return data;
    }
    dispatch(setStartIndex(startIndex + 30));
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
      if (action.payload) {
        const items = Array.isArray(action.payload.items)
          ? action.payload.items
          : [];
        state.items.push(...items);
        state.totalItems =
          state.totalItems === 0 ? action.payload.totalItems : state.totalItems;
      }
      state.status = "success";
    },
    [fetchBooks.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { removeItems } = bookSlice.actions;
export default bookSlice.reducer;
