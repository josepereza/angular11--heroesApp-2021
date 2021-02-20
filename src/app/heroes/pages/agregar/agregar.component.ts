import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";
import { pipe } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius:10%;
   
}


  `
  ]
})
export class AgregarComponent implements OnInit {
  heroe: Heroe = {
    alter_ego: '',
    superhero: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    alt_img: ''

  }
  publisher = [
    {
      id: "DC Comics",
      desc: 'Dc - Comics'
    },
    {
      id: "Marvel Comics",
      desc: 'Marvel Comics'
    },
    {
      id: "DC Comics",
      desc: 'Dc - Comics'
    },
  ]
  constructor(private heroeservice: HeroesService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog,
  private _snackBar: MatSnackBar)
      { }

ngOnInit(): void {
  this.activatedRoute.params
    .pipe(
      switchMap(
        ({ id }) => this.heroeservice.getHeroePorId(id)
      )
    )
    .subscribe(heroe => this.heroe = heroe)
}
guardar(){
  if (this.heroe.superhero.trim().length === 0) {
    return;
  }

  if (this.heroe.id) {
    //actualizar
    this.heroeservice.actualizarHeroe(this.heroe).subscribe(heroe => {
      console.log('prueba heroe ', heroe)
      this.router.navigate(['/heroes/listado']);
      this._snackBar.open("Registro actualizado","OK !",{duration:2000,panelClass: ["custom"]})
    })
  }
  else {
    this.heroeservice.agregarHeroe(this.heroe).subscribe(heroe => {
      this.router.navigate(['/heroes/editar', heroe.id]);
      this._snackBar.open('Registro agregado','OK !', {duration:2000});
    })
  }

}
eliminar(){
  this.openDialog()

}
openDialog(): void {
  const dialogRef = this.dialog.open(ConfirmarComponent, {
    width: '250px',
    data: this.heroe

  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if (result) {
      this.heroeservice.eliminarHeroe(this.heroe).subscribe(heroe => {

      })
    }
    this.router.navigate(['/heroes/listado']);
  });
}

}