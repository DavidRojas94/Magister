import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ultimapagina',
  templateUrl: './ultimapagina.component.html',
  styleUrls: ['./ultimapagina.component.css']
})
export class UltimapaginaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['firstpage']);
  }

}
