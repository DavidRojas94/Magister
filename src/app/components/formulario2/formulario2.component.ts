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
  config: any;
  modalidad = { data: [] };
  horarios = { datos: [] };

  ngOnInit() {
    this.config = {
      totalItems: this.modalidad.data.length,
    };
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

  avanzar() {
    this.router.navigate(['formulario3']);
  }

}
