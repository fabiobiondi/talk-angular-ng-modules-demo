import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeNewsModule } from './home-news/home-news.module';
import { HomeCarouselModule } from './home-carousel/home-carousel.module';
import { CounterModule } from '../../shared/widgets/counter/counter.module';
import { UikitModule } from '../../shared/uikit/uikit.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeNewsModule,
    HomeCarouselModule,
    UikitModule,
    CounterModule
  ]
})
export class HomeModule { }
