import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNewsComponent } from './home-news.component';
import { UikitModule } from '../../../shared/uikit/uikit.module';



@NgModule({
  declarations: [HomeNewsComponent],
  imports: [
    CommonModule,
    UikitModule
  ],
  exports: [HomeNewsComponent]
})
export class HomeNewsModule { }
