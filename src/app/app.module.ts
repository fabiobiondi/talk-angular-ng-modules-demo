import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home.component';
import { ContactsComponent } from './pages/contacts.component';
import { ProductsComponent } from './pages/catalog.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './shared/uikit/components/box.component';
import { ColComponent } from './shared/uikit/components/col.component';
import { GridComponent } from './shared/uikit/components/grid.component';
import { NavbarComponent } from './core/components/navbar.component';
import { UrlDirective } from './shared/uikit/directives/url.directive';
import { CounterComponent } from './shared/widgets/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // features
    HomeComponent,
    ContactsComponent,
    ProductsComponent,
    // UIKIT components
    BoxComponent,
    ColComponent,
    GridComponent,
    UrlDirective,
    // Widgets
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
