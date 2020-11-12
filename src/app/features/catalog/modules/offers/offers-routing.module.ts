import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersComponent } from './offers.component';

const routes: Routes = [{ path: '', component: OffersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
