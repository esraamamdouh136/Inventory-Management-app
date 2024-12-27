import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as InventoryActions from '../../core/state/inventory.actions';
import { switchMap } from 'rxjs/operators';
import { InventoryItem } from '../../shared/models/item.model';
import { InventoryService } from '../../core/service/inventory.service';
@Component({
  selector: 'app-inventory-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory-details.component.html',
  styleUrl: './inventory-details.component.scss'
})
export class InventoryDetailsComponent {
  item?: InventoryItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id') as string;
          return this.inventoryService.getItemById(id);
        })
      )
      .subscribe((item) => {
        this.item = item;
      });
  }

  updateItem(): void {
    if (!this.item) return;
    this.store.dispatch(InventoryActions.updateItem({ item: this.item }));
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/inventory']);
  }
}
