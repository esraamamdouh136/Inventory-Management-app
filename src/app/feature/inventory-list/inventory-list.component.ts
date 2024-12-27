import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InventoryItem } from '../../shared/models/item.model';
import { selectInventoryItems, selectLoading } from '../../core/state/inventory.selectors';
import * as InventoryActions from '../../core/state/inventory.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule ],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})
export class InventoryListComponent {
  items$: Observable<InventoryItem[]>;
  loading$: Observable<boolean>;
  filteredItems: InventoryItem[] = [];

  searchTerm : string = '';
  stockFilter : string = '';

  constructor(private store: Store) {
    this.items$ = this.store.select(selectInventoryItems);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(InventoryActions.loadInventory());

    // Subscribe to items changes
    this.items$.subscribe((items) => {
      this.filteredItems = this.applyFilters(items);
    });
  }

  onSearchChange() {
    this.items$.subscribe((items) => {
      this.filteredItems = this.applyFilters(items);
    });
  }

  onFilterChange() {
    this.items$.subscribe((items) => {
      this.filteredItems = this.applyFilters(items);
    });
  }

  applyFilters(items: InventoryItem[]): InventoryItem[] {
    return items
      ?.filter((i) =>
        i.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .filter((i) => {
        if (!this.stockFilter) return true;
        if (this.stockFilter === 'lowStock') return i.stock < 5;
        if (this.stockFilter === 'inStock') return i.stock >= 5;
        return true;
      });
  }

  deleteItem(item :any){
    const id = item.id
    this.store.dispatch(InventoryActions.deleteItem({ id }));
  }
}
