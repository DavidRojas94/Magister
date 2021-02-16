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
  config: any;
  collection = { data: [] };
  provincias = { datos: [] };

  ngOnInit() {
    this.config = {
      totalItems: this.collection.data.length,
    };
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

  avanzar() {
    this.router.navigate(['formulario2']);
  }
}
