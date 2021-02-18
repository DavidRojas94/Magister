import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css'],
})
export class Formulario1Component implements OnInit {
  constructor(private router: Router, private db: DataDbService) {}
  //creamos una variables y las igualamos a un objeto
  //que contendra un array con la informacion de
  //nuestras colecciones para poder recorrelo
  //y mostrar la informacion que contiene en el html
  config: any;
  collection = { data: [] };
  provincias = { datos: [] };

  ngOnInit() {
    // iniciamos nuestras funciones en el ngOninit para que
    // en el momento que cargue el componente nos muestre
    // la informacion de nuestras colecciones
    this.config = {
      totalItems: this.collection.data.length,
    };
    // llamamos a nuestra funcion que esta en el DatadbService
    // y nos subscribimos para mostrar cualquier cambio que
    // se produzca en la coleccion
    //la filtramos por el pipe map y retornamos la informacion
    //si da un error lo mostramos por la consola
    this.db.getInfo2().subscribe(
      (resp) => {
        this.collection.data = resp.map((e: any) => {
          return {
            rama: e.payload.doc.data().rama,
          };
        });
      },
      (error) => {
        console.error(error);
      }
    );

    this.db.getInfo3().subscribe(
      (resp) => {
        this.provincias.datos = resp.map((e: any) => {
          return {
            provincia: e.payload.doc.data().provincia,
          };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //esta funcion nos hace avanzar de pagina en pagina
  avanzar() {
    this.router.navigate(['formulario2']);
  }
}
