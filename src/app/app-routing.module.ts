import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';

const routes: Routes = [
	{ path : '', component: MoviesComponent},
	{ path : '\movies', component: MoviesComponent},
	{ path : '\moviedetails', component: MovieDetailsComponent},
	{ path : '\bookTickets', component: BookTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
