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
  },
});

export const { updateLocationFilter, updateVanType } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
