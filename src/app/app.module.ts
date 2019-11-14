import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './material.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { ErrorComponent } from './error/error.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
	MoviesComponent,
	MovieDetailsComponent,
	BookTicketsComponent,
	ToolbarComponent,
	ErrorComponent,
	ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MyMaterialModule,
	BrowserAnimationsModule,
	FormsModule,
	ReactiveFormsModule,
	MatProgressSpinnerModule,
	NgbModule
  ],
  entryComponents: [ErrorComponent,ConfirmationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
