import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { CounterModule } from '../../shared/widgets/counter/counter.module';
import { UikitModule } from '../../shared/uikit/uikit.module';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    UikitModule,
    CounterModule
  ]
})
export class ContactsModule { }
