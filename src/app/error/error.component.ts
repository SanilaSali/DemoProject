import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<ErrorComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit() {
  }

	public  closeDialog() {
        this.dialogRef.close();
    }
}
