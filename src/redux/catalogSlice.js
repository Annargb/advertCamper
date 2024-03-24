import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const catalogSlice = createSlice({
  name: 'catalogItems',
  initialState: {
    catalogItems: [],
    visibleItems: [],
    currentPage: 1,
    totalPages: 1,
    favorites: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    updateCurrentPage(state) {
      state.currentPage += 1;
    },
    updateFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.catalogItems.push(...action.payload);
        state.totalPages = Math.ceil(state.catalogItems.length / 4);
        state.visibleItems = state.catalogItems.slice(0, state.currentPage * 4);
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { updateCurrentPage, updateFavorites } = catalogSlice.actions;
