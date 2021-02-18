import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-formulario6',
  templateUrl: './formulario6.component.html',
  styleUrls: ['./formulario6.component.css']
})
export class Formulario6Component implements OnInit {

  constructor(private router: Router, private db: DataDbService) { }

  ngOnInit(): void {
  }
  avanzar(){
    this.router.navigate(['ultimapagina']);
  }

}
