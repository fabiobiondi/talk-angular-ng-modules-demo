import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastMinuteRoutingModule } from './last-minute-routing.module';
import { LastMinuteComponent } from './last-minute.component';


@NgModule({
  declarations: [LastMinuteComponent],
  imports: [
    CommonModule,
    LastMinuteRoutingModule
  ]
})
export class LastMinuteModule { }
