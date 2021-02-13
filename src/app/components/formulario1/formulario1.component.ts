import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  avanzar(){
    this.router.navigate(['formulario2']);
  }

}
