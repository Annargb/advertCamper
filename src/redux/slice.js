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
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.catalogItems = action.payload;
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
