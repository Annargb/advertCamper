import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogItems = (state) => state.catalog.catalogItems;
export const selectVisibleItems = (state) => state.catalog.visibleItems;
export const selectCatalogIsLoading = (state) => state.catalog.isLoading;
export const selectTotalPages = (state) => state.catalog.totalPages;
export const selectCurrentPage = (state) => state.catalog.currentPage;
export const selectFavorites = (state) => state.catalog.favorites;
export const selectFilter = (state) => state.filter;

export const selectFilteredCampers = createSelector(
  [selectCatalogItems, selectFilter],
  (camper, filter) => {
    return camper.filter((camper) =>
      camper.location.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
