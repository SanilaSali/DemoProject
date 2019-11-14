import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../entities/Movie';
import * as data from '../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
	
   constructor() { }
   
   getAllMovies(): any {	
	return data.movies;	
   }
   
   getAllShowLocations():any{
	   return data.showLocations;
   }
}
