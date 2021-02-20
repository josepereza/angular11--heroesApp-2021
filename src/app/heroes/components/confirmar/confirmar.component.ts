import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmarComponent>,
  
  @Inject(MAT_DIALOG_DATA) public data:Heroe )  { }

  ngOnInit(): void {
  }
aceptar(){
  this.dialogRef.close(true);
}
cancelar(){
  this.dialogRef.close();
}
}
