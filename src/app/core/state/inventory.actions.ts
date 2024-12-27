import { createAction, props } from '@ngrx/store';
import { InventoryAddItem, InventoryItem } from '../../shared/models/item.model';

export const loadInventory = createAction(
  '[Inventory] Load Inventory'
);

export const loadInventorySuccess = createAction(
  '[Inventory] Load Inventory Success',
  props<{ items: InventoryItem[] }>()
);

export const loadInventoryFailure = createAction(
  '[Inventory] Load Inventory Failure',
  props<{ error: any }>()
);

export const addItem = createAction(
  '[Inventory] Add Item',
  props<{ item: Partial<InventoryAddItem> }>()
)

export const addItemSuccess = createAction(
  '[Inventory] Add Item Success',
  props<{ item: InventoryItem }>()
);

export const addItemFailure = createAction(
  '[Inventory] Add Item Failure',
  props<{ error: any }>()
);

export const updateItem = createAction(
  '[Inventory] Update Item',
  props<{ item: InventoryItem }>()
);

export const updateItemSuccess = createAction(
  '[Inventory] Update Item Success',
  props<{ item: InventoryItem }>()
);

export const updateItemFailure = createAction(
  '[Inventory] Update Item Failure',
  props<{ error: any }>()
);

export const deleteItem = createAction(
  '[Inventory] delete Item',
  props<{ id: string }>()
);

export const deleteItemSuccess = createAction(
  '[Inventory] delete Item Success',
  props<{ id: string }>()
);

export const deleteItemFailure = createAction(
  '[Inventory] delete Item Failure',
  props<{ error: any }>()
);
