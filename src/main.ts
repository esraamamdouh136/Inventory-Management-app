import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { InventoryEffects } from './app/core/state/inventory.effects';
import { inventoryReducer } from './app/core/state/inventory.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      FormsModule,
      ReactiveFormsModule,
      StoreDevtoolsModule.instrument({ maxAge: 25 })
    ),
    provideStore({ 'inventory': inventoryReducer }),
    provideEffects([InventoryEffects]),
    provideRouter(routes),
  ]
})
  .catch(err => console.error(err));
