import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-magisterbar',
  templateUrl: './magisterbar.component.html',
  styleUrls: ['./magisterbar.component.css'],
})
export class MagisterbarComponent implements OnInit {
  @Input() etapa;

  constructor() {}

  ngOnInit(): void {
    console.log('magisterbar');
  }
  actual(numero: number) {
    return numero === this.etapa;
  }
  returnString(numero: number) {
    // devulve la clase seleccionado si el numero
    // de etapa coincide con el numero del titulo
    if (numero === this.etapa) {
      return 'seleccionado';
    }
  }
}
