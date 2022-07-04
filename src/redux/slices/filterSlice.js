import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  category: "all",
  sort: "relevance",
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.searchValue = action.payload.searchValue;
      state.category = action.payload.categoryId;
    },
  },
});

export const { setCategory, setSortBy, setSearchValue, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
