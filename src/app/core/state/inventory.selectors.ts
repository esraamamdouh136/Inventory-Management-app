import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InventoryState } from './inventory.reducer';

export const selectInventoryState = createFeatureSelector<InventoryState>('inventory');

export const selectInventoryItems = createSelector(
  selectInventoryState,
  (state) => state?.items
);

export const selectLoading = createSelector(
  selectInventoryState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectInventoryState,
  (state) => state.error
);
