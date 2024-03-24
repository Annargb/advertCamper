import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    vanType: '',
  },
  reducers: {
    updateLocationFilter(state, action) {
      state.location = action.payload;
    },
    updateVanType(state, action) {
      state.vanType = action.payload;
    },
    resetFilters(state) {
      state.vanType = '';
    },
  },
});

export const { updateLocationFilter, updateVanType, resetFilters } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
