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

        const fetchedArr = state.catalogItems.some(
          (item) => item.id === action.payload[0].id
        );

        if (!fetchedArr) {
          state.catalogItems.push(...action.payload);
        }

        // state.catalogItems.push(...action.payload);
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { updateCurrentPage, updateFavorites } = catalogSlice.actions;
