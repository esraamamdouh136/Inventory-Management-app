import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as InventoryActions from './inventory.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { InventoryService } from '../service/inventory.service';

@Injectable()
export class InventoryEffects {
  loadInventory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.loadInventory),
      switchMap(() =>
        this.inventoryService.getItems().pipe(
          map((items) => InventoryActions.loadInventorySuccess({ items })),
          catchError((error) => of(InventoryActions.loadInventoryFailure({ error })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.addItem),
      switchMap(({ item }) =>
        this.inventoryService.addItem(item).pipe(
          map((addedItem) => InventoryActions.addItemSuccess({ item: addedItem })),
          catchError((error) => of(InventoryActions.addItemFailure({ error })))
        )
      )
    )
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.updateItem),
      switchMap(({ item }) =>
        this.inventoryService.updateItem(item).pipe(
          map((updatedItem) => InventoryActions.updateItemSuccess({ item: updatedItem })),
          catchError((error) => of(InventoryActions.updateItemFailure({ error })))
        )
      )
    )
  );

  deleteItem$ = createEffect(() =>
  this.actions$.pipe(
    ofType(InventoryActions.deleteItem),
    switchMap(({ id }) =>
      this.inventoryService.deleteItemById(id).pipe(
        map((deletedItem) => InventoryActions.deleteItemSuccess({ id })),
        catchError((error) => of(InventoryActions.deleteItemFailure({ error })))
      )
    )
  )
);

  constructor(private actions$: Actions, private inventoryService: InventoryService) {}
}
