import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as InventoryActions from '../../core/state/inventory.actions';
import { CommonModule } from '@angular/common';
import { InventoryItem } from '../../shared/models/item.model';

@Component({
  selector: 'app-inventory-form',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule , CommonModule],
  templateUrl: './inventory-form.component.html',
  styleUrl: './inventory-form.component.scss'
})
export class InventoryFormComponent {
  itemForm = this.fb.group({
    name: ['', Validators.required],
    category: [''],
    stock: [0, [Validators.required, Validators.min(0)]],
    lastUpdated: [''],
  });

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {}

  onSubmit() {
    if (this.itemForm.valid) {
      const newItem = this.itemForm.value;
      this.store.dispatch(InventoryActions.addItem({ item : newItem  }));
      this.router.navigate(['/inventory']);
    }
  }
}
