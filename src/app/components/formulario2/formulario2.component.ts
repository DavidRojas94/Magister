import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDbService } from '../../services/data-db.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css'],
})
export class Formulario2Component implements OnInit {
  constructor(private router: Router, private db: DataDbService) {}
  //creamos una variables y las igualamos a un objeto
  //que contendra un array con la informacion de
  //nuestras colecciones para poder recorrelo
  //y mostrar la informacion que contiene en el html
  config: any;
  modalidad = { data: [] };
  horarios = { datos: [] };

  ngOnInit() {
    // iniciamos nuestras funciones en el ngOninit para que
    // en el momento que cargue el componente nos muestre
    // la informacion de nuestras colecciones
    this.config = {
      totalItems: this.modalidad.data.length,
    };
    // llamamos a nuestra funcion que esta en el DatadbService
    // y nos subscribimos para mostrar cualquier cambio que
    // se produzca en la coleccion
    //la filtramos por el pipe map y retornamos la informacion
    //si da un error lo mostramos por la consola
    this.db.getInfo1().subscribe(
      (resp) => {
        this.modalidad.data = resp.map((e: any) => {
          return {
            modalidad: e.payload.doc.data().modalidad,
          };
        });
      },
      (error) => {
        console.error(error);
      }
    );
    this.db.getInfo4().subscribe(
      (resp) => {
        this.horarios.datos = resp.map((e: any) => {
          return {
            horarios: e.payload.doc.data().horarios,
          };
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  //esta funcion nos hace avanzar de pagina en pagina
  avanzar() {
    this.router.navigate(['formulario3']);
  }

}
