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
  config: any;
  tarifas = { data: [] };

  ngOnInit() {
    this.config = {
      totalItems: this.tarifas.data.length,
    };
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
  avanzar(){
    this.router.navigate(['formulario4']);
  }
}
