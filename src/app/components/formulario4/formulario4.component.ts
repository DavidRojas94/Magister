import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario4',
  templateUrl: './formulario4.component.html',
  styleUrls: ['./formulario4.component.css']
})
export class Formulario4Component implements OnInit {

  //creamos un funcion donde retornamos los
  //bloques que componen nuestro formulario
  //hemos puesto algunos campos requeridos para ver
  //que sucede si el formulario no es correcto
  createFormGroup(){
    return new FormGroup({
      name : new FormControl ('', [Validators.required]),
      dni  : new FormControl('', [Validators.required]),
      movil : new FormControl ('', [Validators.required]),
      email : new FormControl ('', [Validators.required]),
    })
  }
  //creamos una variable y lo agregamos a nuestro Formgoup
  //para asi poder llamar ala funcion que crea el forgroup
  contactForm : FormGroup;
  constructor(private dbData: DataDbService, private router: Router) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }
  //creamos una funcion para guardar lo que hemos escrito
  //en el formulario en la coleccion
  //llamamos a nuestra funcion saveInformation que teniamos en el dataDbService
  //y le pasamos los valores de los campos de nuestro formulario
  onSaveForm(){
    console.log("ready");
    /*if(this.contactForm.valid){
      this.dbData.saveInformation(this.contactForm.value);
    }else{
      console.log("no valido");
    }*/

  }
  //esta funcion nos hace avanzar de pagina en pagina
  avanzar(){
    this.router.navigate(['formulario5']);
  }


}
