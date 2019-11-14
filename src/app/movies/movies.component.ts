import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

 onMovieClick(value){
	  console.log("IN MoviesComponent - Submit moviename : ",value);
	  sessionStorage.setItem('moviename',value);
	  this.router.navigateByUrl('\moviedetails');
		 
	  
  }	
}
