import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  category: "all",
  sort: "relevance",
  startIndex: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortBy(state, action) {
      state.sort = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setStartIndex(state, action) {
      state.startIndex = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.searchValue = action.payload.search;
      state.category = action.payload.category;
    },
  },
});

export const { setCategory, setSortBy, setSearchValue, setStartIndex, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
