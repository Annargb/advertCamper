import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    vanType: '',
    checkedEquipment: [],
    transmission: '',
  },
  reducers: {
    updateLocationFilter(state, action) {
      state.location = action.payload;
    },
    updateVanType(state, action) {
      state.vanType = action.payload;
    },
    updateEquipment(state, action) {
      state.checkedEquipment = [...action.payload];
    },
    changeTransmission(state, action) {
      state.transmission = action.payload;
    },
    resetFilters(state) {
      state.location = '';
      state.vanType = '';
      state.checkedEquipment = [];
      state.transmission = '';
    },
  },
});

export const {
  updateLocationFilter,
  updateVanType,
  updateEquipment,
  changeTransmission,
  resetFilters,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: {
//     location: '',
//     vanType: '',
//     equipment: {
//       airConditioner: false,
//       transmission: false,
//       kitchen: false,
//       TV: false,
//       showerToilet: false,
//     },
//   },
//   reducers: {
//     updateLocationFilter(state, action) {
//       state.location = action.payload;
//     },
//     updateVanType(state, action) {
//       state.vanType = action.payload;
//     },
//     updateEquipment(state, action) {
//       state.equipment = action.payload;
//     },
//     resetFilters(state) {
//       state.location = '';
//       state.vanType = '';
//       state.equipment = {
//         airConditioner: false,
//         transmission: false,
//         kitchen: false,
//         TV: false,
//         showerToilet: false,
//       };
//     },
//   },
// });

// export const {
//   updateLocationFilter,
//   updateVanType,
//   updateEquipment,
//   resetFilters,
// } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
