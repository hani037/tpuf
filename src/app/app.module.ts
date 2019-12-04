import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { AcheterComponent } from './acheter/acheter.component';
import { AdminComponent } from './admin/admin.component';
import { AdminbooksComponent } from './adminbooks/adminbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    BooksComponent,
    DetailsComponent,
    PanierComponent,
    FilterPipe,
    AcheterComponent,
    AdminComponent,
    AdminbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailsComponent, AcheterComponent]
})
export class AppModule { }
