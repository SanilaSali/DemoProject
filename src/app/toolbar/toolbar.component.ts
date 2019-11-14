import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieService} from '../services/movie.service';
import { Movie } from '../entities/Movie';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	
  private movieName = sessionStorage.getItem('moviename');
  movieList : Movie[];

  constructor( private router: Router, public movieService: MovieService, private  dialog:  MatDialog) { 
  }

  ngOnInit() {
	this.reloadData();
  }
  
  onSubmit(value){
	  console.log("IN ToolbarComponent - Submit moviename : ",value['moviename']);
	  sessionStorage.setItem('moviename',value['moviename']);
	  console.log("IN ToolbarComponent - Submit movieList : ",this.movieList);
	  let exists = false;
	  this.movieList.forEach(movie =>{
		  console.log("IN ToolbarComponent - movie.name : ",movie.name);
		  if(movie.name == value['moviename']){
			  this.router.navigateByUrl('\moviedetails');
				exists=true;
		  } 
	  });
	  if(!exists){	
				this.dialog.open(ErrorComponent,{ data: {
					message:  "Sorry, No Results found for this movie!"
				}});
				return;
	  }
	  
  }
  
  reloadData(){
	this.movieList = this.movieService.getAllMovies();
  }


}
