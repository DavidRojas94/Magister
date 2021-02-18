import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDbService } from '../../services/data-db.service';
@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css'],
})
export class Formulario3Component implements OnInit {
  constructor(private router: Router,private db: DataDbService) {}
  //creamos una variables y las igualamos a un objeto
  //que contendra un array con la informacion de
  //nuestras colecciones para poder recorrelo
  //y mostrar la informacion que contiene en el html
  config: any;
  tarifas = { data: [] };

  ngOnInit() {
    // iniciamos nuestras funciones en el ngOninit para que
    // en el momento que cargue el componente nos muestre
    // la informacion de nuestras colecciones
    this.config = {
      totalItems: this.tarifas.data.length,
    };
    // llamamos a nuestra funcion que esta en el DatadbService
    // y nos subscribimos para mostrar cualquier cambio que
    // se produzca en la coleccion
    //la filtramos por el pipe map y retornamos la informacion
    //si da un error lo mostramos por la consola
    this.db.getInfo5().subscribe(
      (resp) => {
        this.tarifas.data = resp.map((e: any) => {
          return {
            tarifa: e.payload.doc.data().tarifa,
          };
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  //esta funcion nos hace avanzar de pagina en pagina
  avanzar(){
    this.router.navigate(['formulario']);
  }
}
