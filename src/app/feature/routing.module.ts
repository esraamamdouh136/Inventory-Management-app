import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';

const routes: Routes = [
  { path: '', component: InventoryListComponent },
  { path: 'new', component: InventoryFormComponent },
  { path: ':id', component: InventoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
