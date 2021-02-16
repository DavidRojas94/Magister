import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  items: Observable<any[]>;

  createFormGroup(){
    return new FormGroup({
      name : new FormControl ('', [Validators.required]),
      dni  : new FormControl('', [Validators.required]),
      movil : new FormControl ('', [Validators.required]),
      email : new FormControl ('', [Validators.required]),
    })
  }
  contactForm : FormGroup;

  constructor(private dbData: DataDbService) {
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
  mostrarInformacion(){
    this.dbData.mostrarInfo;
    console.log("mostrando",this.contactForm.value);
  }


}
