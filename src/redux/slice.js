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
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
        state.visibleItems = state.catalogItems.slice(0, state.currentPage * 4);
      }
    },
    updateFavorites(state, action) {
      state.favorites = action.payload;
    },
    addFavorites(state, action) {
      state.favorites.push(action.payload);
    },

    removeFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (camper) => camper.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.catalogItems = action.payload;
        state.totalPages = Math.ceil(state.catalogItems.length / 4);
        state.visibleItems = state.catalogItems.slice(0, state.currentPage * 4);
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
export const {
  addFavorites,
  removeFavorites,
  updateCurrentPage,
  updateFavorites,
} = catalogSlice.actions;
