import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogItems = (state) => state.catalog.catalogItems;
export const selectCatalogIsLoading = (state) => state.catalog.isLoading;
export const selectCurrentPage = (state) => state.catalog.currentPage;
export const selectFavorites = (state) => state.catalog.favorites;
export const selectVisibleButton = (state) => state.catalog.visibleButton;
export const selectLocationFilter = (state) => state.filter.location;
export const selectVanType = (state) => state.filter.vanType;
export const selectCheckedEquipment = (state) => state.filter.checkedEquipment;
export const selectTransmission = (state) => state.filter.transmission;

export const selectFilteredCampers = createSelector(
  [
    selectCatalogItems,
    selectLocationFilter,
    selectVanType,
    selectCheckedEquipment,
    selectTransmission,
  ],
  (camper, locationFilter, vanType, checkedEquipment, transmission) => {
    return camper.filter((camper) => {
      const locationMatch = camper.location
        .toLowerCase()
        .includes(locationFilter.toLowerCase());
      const vanTypeMatch =
        vanType === '' || camper.form.toLowerCase() === vanType.toLowerCase();

      const equipmentMatch = checkedEquipment.every((equipment) => {
        if (equipment === 'showerToilet') {
          return camper.details.shower > 0 || camper.details.toilet > 0;
        }
        return camper.details[equipment] > 0;
      });

      const transmissionMatch =
        transmission === '' ||
        (transmission === 'automatic' &&
          camper.transmission.toLowerCase() === 'automatic');

      // const transmissionMatch =
      //   checkedEquipment.includes('automatic') &&
      //   camper.transmission.toLowerCase() === 'automatic';

      // return (
      //   locationMatch && vanTypeMatch && equipmentMatch

      return (
        locationMatch && vanTypeMatch && equipmentMatch && transmissionMatch
      );
    });
  }
);

// export const selectFilteredCampers = createSelector(
//   [
//     selectCatalogItems,
//     selectLocationFilter,
//     selectVanType,
//     selectEquipmentFilter,
//   ],
//   (campers, locationFilter, vanType, equipmentFilter) => {
//     return campers.filter((camper) => {
//       const locationMatch = camper.location
//         .toLowerCase()
//         .includes(locationFilter.toLowerCase());
//       const vanTypeMatch =
//         vanType === '' || camper.form.toLowerCase() === vanType.toLowerCase();

// const equipmentMatch = checkedEquipment.every(
//   (equipment) => camper.details[equipment] > 0
// );

//       // Перевірка наявності обладнання
//       const equipmentMatch = Object.keys(equipmentFilter).every((key) => {
//         if (equipmentFilter[key] && !camper.details[key]) {
//           return false;
//         }
//         return true;
//       });

//       // Перевірка трансмісії
//       const transmissionMatch =
//         !equipmentFilter['transmission'] ||
//         camper.transmission.toLowerCase() === 'automatic';

//       // Перевірка двигуна
//       const engineMatch =
//         !equipmentFilter['engine'] || camper.engine.toLowerCase() === 'petrol';

//       return (
//         locationMatch &&
//         vanTypeMatch &&
//         equipmentMatch &&
//         transmissionMatch &&
//         engineMatch
//       );
//     });
//   }
// );
