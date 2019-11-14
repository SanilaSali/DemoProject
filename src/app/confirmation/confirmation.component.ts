import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
	
	activeSpinner:boolean;

  constructor(private  dialogRef:  MatDialogRef<ConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit() {
	  this.activeSpinner = false;
  }

	public closeDialog() {
        this.dialogRef.close();
    }
	
	proceed(){
		console.log("IN proceed");
		this.dialogRef.close();
		this.activeSpinner = true;
	}
}
