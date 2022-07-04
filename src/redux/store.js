import { configureStore } from "@reduxjs/toolkit";
import book from "./slices/booksSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    book,
    filter,
  },
});
