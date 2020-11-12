import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastMinuteComponent } from './last-minute.component';

const routes: Routes = [{ path: '', component: LastMinuteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastMinuteRoutingModule { }
