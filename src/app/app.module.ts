import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BookComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { AddRemoveBookComponent } from './components/add-remove-book/add-remove-book.component';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular2-chartjs';

import { FilterBookPipe } from './pipes/fiter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BookComponent,
    DashboardComponent,
    BooksSearchComponent,
    AddRemoveBookComponent,
    FilterBookPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }

}
