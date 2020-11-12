import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './shared/uikit/components/box.component';
import { ColComponent } from './shared/uikit/components/col.component';
import { GridComponent } from './shared/uikit/components/grid.component';
import { NavbarComponent } from './core/components/navbar.component';
import { UrlDirective } from './shared/uikit/directives/url.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // Shared components
    BoxComponent,
    ColComponent,
    GridComponent,
    UrlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
