import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
      { path: 'offers', loadChildren: () => import('./modules/offers/offers.module').then(m => m.OffersModule) },
      { path: 'last-minute', loadChildren: () => import('./modules/last-minute/last-minute.module').then(m => m.LastMinuteModule) },
      { path: '', redirectTo: 'products'}
    ]
  },
  /*
  { path: '', component: CatalogComponent },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'offers', loadChildren: () => import('./modules/offers/offers.module').then(m => m.OffersModule) },
  { path: 'last-minute', loadChildren: () => import('./modules/last-minute/last-minute.module').then(m => m.LastMinuteModule) }*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
