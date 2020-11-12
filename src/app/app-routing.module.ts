import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ContactsComponent } from './pages/contacts.component';
import { ProductsComponent } from './pages/catalog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'catalog', component: ProductsComponent},
  { path: '**',  redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

