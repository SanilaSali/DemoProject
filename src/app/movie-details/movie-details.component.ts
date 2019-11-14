import { Component, OnInit } from '@angular/core';
import { MovieService} from '../services/movie.service';
import { Movie } from '../entities/Movie';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
	
  private movieName = sessionStorage.getItem('moviename');
  movieList : Movie[];
  movie : Movie;
 
 constructor( public movieService: MovieService, private router: Router) { }

  ngOnInit() {
	  this.movieList = [];
	  this.reloadData();
	  
  }
  
  reloadData(){
	this.movieList = this.movieService.getAllMovies();
	this.movieList.forEach(movie =>{
		  if(movie.name == this.movieName){
			 this.movie = movie; 
			 console.log(" ==============> this.movie :", this.movie );
		  }
	  });
  }
  
  bookmyTickets(){
	  this.router.navigateByUrl('\bookTickets');
  }

}
