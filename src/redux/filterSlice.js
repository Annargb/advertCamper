import { createSlice } from '@reduxjs/toolkit';

// const commonFilter = {
//   location: '',
//   vanType: '',
// };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    commonFilter: {
      location: '',
      vanType: '',
    },
  },
  reducers: {
    updateFilter(state, action) {
      state.commonFilter = action.payload;
      // state.commonFilter.location = action.payload.location;
      // state.commonFilter.vanType = action.payload.vanType;
    },
  },
});

export const { updateFilter, updateVanType } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: {
//     location: '',
//     vanType: '',
//   },
//   reducers: {
//     updateLocationFilter(state, action) {
//       console.log(action.payload);
//       state.location = action.payload;
//     },
//     updateVanType(state, action) {
//       state.vanType = action.payload;
//     },
//   },
// });

// export const { updateLocationFilter, updateVanType } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
