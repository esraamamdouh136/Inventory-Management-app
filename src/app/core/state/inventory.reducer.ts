import { createReducer, on } from '@ngrx/store';
import * as InventoryActions from './inventory.actions';
import { InventoryItem } from '../../shared/models/item.model';

export interface InventoryState {
  items: InventoryItem[];
  loading: boolean;
  error: any;
}

export const initialState: InventoryState = {
  items: [],
  loading: false,
  error: null,
};

export const inventoryReducer = createReducer(
  initialState,
  on(InventoryActions.loadInventory, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(InventoryActions.loadInventorySuccess, (state, { items }) => ({
    ...state,
    loading: false,
    items,
  })),
  on(InventoryActions.loadInventoryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  
  on(InventoryActions.addItem, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(InventoryActions.addItemSuccess, (state, { item }) => ({
    ...state,
    loading: false,
    items: [...state.items, item],
  })),
  on(InventoryActions.addItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(InventoryActions.updateItem, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(InventoryActions.updateItemSuccess, (state, { item }) => ({
    ...state,
    loading: false,
    items: state.items.map((inv) => inv.id === item.id ? item : inv),
  })),
  on(InventoryActions.updateItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(InventoryActions.deleteItem, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(InventoryActions.deleteItemSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    items: state.items.filter((item) => item.id !== id),
  })),
  on(InventoryActions.deleteItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))

);
