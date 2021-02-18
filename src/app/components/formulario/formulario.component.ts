import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      name : new FormControl ('', [Validators.required]),
      dni  : new FormControl('', [Validators.required]),
      movil : new FormControl ('', [Validators.required]),
      email : new FormControl ('', [Validators.required]),
    })
  }
  contactForm : FormGroup;
  constructor(private dbData: DataDbService, private router: Router) {
    this.contactForm = this.createFormGroup();

  }

  ngOnInit(): void {
  }
  onSaveForm(){
    if(this.contactForm.valid){
      this.dbData.saveInformation(this.contactForm.value);
    }else{
      console.log("no valido");
    }

  }
  avanzar(){
    this.router.navigate(['formulario5']);
  }


}
