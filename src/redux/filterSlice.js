import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setLocationFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setLocationFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
