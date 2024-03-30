import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogItems = (state) => state.catalog.catalogItems;
export const selectCatalogIsLoading = (state) => state.catalog.isLoading;
export const selectCurrentPage = (state) => state.catalog.currentPage;
export const selectFavorites = (state) => state.catalog.favorites;
export const selectVisibleButton = (state) => state.catalog.visibleButton;
export const selectLocationFilter = (state) => state.filter.location;
export const selectVanType = (state) => state.filter.vanType;
export const selectEquipment = (state) => state.filter.selectEquipment;

export const selectFilteredCampers = createSelector(
  [selectCatalogItems, selectLocationFilter, selectVanType, selectEquipment],
  (camper, locationFilter, vanType) => {
    return camper.filter((camper) => {
      const locationMatch = camper.location
        .toLowerCase()
        .includes(locationFilter.toLowerCase());
      const vanTypeMatch =
        vanType === '' || camper.form.toLowerCase() === vanType.toLowerCase();
      return locationMatch && vanTypeMatch;
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
