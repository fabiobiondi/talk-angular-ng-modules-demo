import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNewsComponent } from './home-news.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [HomeNewsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeNewsComponent]
})
export class HomeNewsModule { }
