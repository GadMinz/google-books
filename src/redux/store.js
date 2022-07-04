import { configureStore } from "@reduxjs/toolkit";
import book from "./slices/booksSlice";

export const store = configureStore({
    reducer: {
        book,
    },
});
