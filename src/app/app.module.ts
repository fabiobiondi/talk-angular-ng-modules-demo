import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar.component';
import { UtilsModule } from './shared/utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule.forRoot(10)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
