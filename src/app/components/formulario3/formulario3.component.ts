import { Component, Input, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { Information } from '../../models/information.interface';
@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css'],
})
export class Formulario3Component implements OnInit {

  constructor(private db: DataDbService) {}
  config: any;
  collection = { data: [] }

  /*ngOnInit() {
    this.config = {
      totalItems: this.collection.data.length
    };
    this.db.getInfo().subscribe(resp => {
      this.collection.data = resp.map((e: any) => {
        return {
          name: e.payload.doc.data().name,
          dni: e.payload.doc.data().dani,
          movil: e.payload.doc.data().movil,
          email: e.payload.doc.data().email
        }
      })
    },
      error => {
        console.error(error);
      }
    );
  }*/
  ngOnInit() {
    this.config = {
      totalItems: this.collection.data.length
    };
    this.db.getInfo1().subscribe(resp => {
      this.collection.data = resp.map((e: any) => {
        return {
          modalidad: e.payload.doc.data().modalidad,
          //dni: e.payload.doc.data().dani,
          //movil: e.payload.doc.data().movil,
          //email: e.payload.doc.data().email
        }
      })
    },
      error => {
        console.error(error);
      }
    );
  }
   }


  /*getInfo(){
    this.db.getInfo().subscribe((resp) => {
      this.items.data = resp.map((e: any) => {
        return {
          name: e.payload.doc.data().name,
          dni: e.playload.doc.data().dni,
          movil: e.playload.doc.data().movil,
          email: e.playload.doc.data().email,
        };
      });
    });
  }

  getInfo() {
    //this.db.mostrarInfo('datosPersonales').subscribe(listDoc => console.log(listDoc));
    this.db.getTodos().subscribe((resp) => {
      this.info = [];
      resp.forEach((value) => {
        const data = value.data;
        const id = value.id;
        const item: Information = {
          name : data.name,
          dni: data.dni,
          movil: data.movil,
          email: data.email,

        };
        this.info.push(item);
      });
    });
  }*/

