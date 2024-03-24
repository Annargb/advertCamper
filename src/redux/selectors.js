import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogItems = (state) => state.catalog.catalogItems;
// export const selectVisibleItems = (state) => state.catalog.visibleItems;
export const selectCatalogIsLoading = (state) => state.catalog.isLoading;
export const selectTotalPages = (state) => state.catalog.totalPages;
export const selectCurrentPage = (state) => state.catalog.currentPage;
export const selectFavorites = (state) => state.catalog.favorites;
export const selectLocationFilter = (state) => state.filter.location;
export const selectVanType = (state) => state.filter.vanType;

export const selectFilteredCampers = createSelector(
  [selectCatalogItems, selectLocationFilter, selectVanType],
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
