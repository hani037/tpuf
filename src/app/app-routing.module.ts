import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';

import {SignInComponent} from './sign-in/sign-in.component';
import {PanierComponent} from './panier/panier.component';
import {AuthGuard} from './auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {AuthguardadminService} from './authguardadmin.service';
import {AdminbooksComponent} from './adminbooks/adminbooks.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
        path: 'books',
        component: BooksComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthguardadminService]
  },
  {
    path: 'adminb',
    component: AdminbooksComponent,
    canActivate: [AuthguardadminService]
  },
  {
  path: 'panier',
  component: PanierComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
