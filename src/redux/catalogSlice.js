import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './operations';

const handlePending = (state) => {
  state.isLoading = true;

  if (state.currentPage > 1) {
    state.isLoading = false;
  }
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const catalogSlice = createSlice({
  name: 'catalogItems',
  initialState: {
    catalogItems: [],
    currentPage: 1,
    favorites: [],
    visibleButton: true,
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
    hideButton(state) {
      state.visibleButton = false;
    },
    showButton(state) {
      state.visibleButton = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const fetchedArr = state.catalogItems.some(
          (item) => item.id === action.payload[0].id
        );

        if (!fetchedArr) {
          state.catalogItems.push(...action.payload);
        }

        if (action.payload.length < 4) {
          state.visibleButton = false;
        }
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { updateCurrentPage, updateFavorites, showButton, hideButton } =
  catalogSlice.actions;
