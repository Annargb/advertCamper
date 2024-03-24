import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vanType: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocationFilter(state, action) {
      return (state.filter.location = action.payload);
    },
    setVanType(state, action) {
      return (state.filter.vanType = action.payload);
    },
  },
});

export const { setLocationFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
