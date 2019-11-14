import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Booking } from '../entities/Booking';
import { ShowLocation } from '../entities/ShowLocation';
import { MovieService} from '../services/movie.service';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent implements OnInit {
	
  private movieName = sessionStorage.getItem('moviename');
  selectedValue: string; 
  formBooking: Booking;
  movieLocations: ShowLocation[] =[];
  cities: string[]=[];
  showlocation: string[]=[];
  showTimimgs: string[]=[];
  ticketTypes: string[]=[];
  errors : string;
  isInvalid : boolean;
   
  constructor(public movieService: MovieService, private  dialog:  MatDialog, private router: Router) {}
  
  ngOnInit() {
	   this.reloadData();
	   this.errors = " "; 
	   this.isInvalid = false;
  }
  
  reloadData(){
	this.cities = ["Mumbai","Chennai"];
	this.showTimimgs = ["12:00PM", "3:30PM", "7:00PM", "10:30PM"];
	this.showlocation = ["Cinepolis: Magnet Mall, Bhandup (W)","PVR: Nirmal Lifestyle, Mulund (W)","Carnival: R Mall Mulund","Carnival: Huma, Kanjurmarg"];
	this.formBooking = new Booking("","","","","","",0); 
	this.ticketTypes = ["CLASSIC","PRIME","EXECUTIVE"];
	this.movieLocations = this.movieService.getAllShowLocations();
  }
  
  onCityChange(event){
	
	console.log("IN onCityChange event ",event);
	let selectElement = event.target;
	let selectElementText = selectElement['options'][event.target['options'].selectedIndex].text;
	console.log("Selected city",selectElementText);
	this.movieLocations.forEach(movieLocation =>{
		if(movieLocation.city == selectElementText){
			this.showlocation = movieLocation.places; 
			 console.log(" ==============> this.showlocation :", this.showlocation);
		}
	  });
	}

	onSubmit(form: NgForm){
		
      console.log("IN onSubmit - this.formBooking ",this.formBooking);
	  this.errors = null; 
	  this.isInvalid = false;
	
	  this.formBooking.name = this.movieName;
	  if(this.formBooking.ticketCount!=0){
		  let amount = 0;
		  if (this.formBooking.ticketType == "CLASSIC")
			  amount = 100 * this.formBooking.ticketCount;
		  else if (this.formBooking.ticketType == "PRIME")
			  amount = 120 * this.formBooking.ticketCount;
		  else if (this.formBooking.ticketType == "EXECUTIVE")
			  amount = 140 * this.formBooking.ticketCount;
		  console.log("amount===============>",amount);
		  this.dialog.open(ConfirmationComponent,{ data: {
						message:  "Amount Payable is Rs."+amount+". Would you like to proceed ?"
					}});
					return;
	  }
	  else{
		this.errors = "Please select number of Tickets ";
		this.isInvalid = true;
		}
	}
	
	cancelForm(){
		this.router.navigateByUrl('\movies');
	}
}
