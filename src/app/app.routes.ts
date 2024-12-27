import { Routes } from '@angular/router';

export const routes: Routes = [
        {
          path: 'inventory',
          loadChildren: () => import('./feature/routing.module')
            .then(m => m.InventoryRoutingModule)
        },
        { path: '', redirectTo: 'inventory', pathMatch: 'full' },
];
