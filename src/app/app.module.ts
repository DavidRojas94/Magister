import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataDbService } from './services/data-db.service';

//Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { UltimapaginaComponent } from './components/ultimapagina/ultimapagina.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { MagisterbarComponent } from './components/magisterbar/magisterbar.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Formulario3Component } from './components/formulario3/formulario3.component';
import { Formulario4Component } from './components/formulario4/formulario4.component';
import { Formulario5Component } from './components/formulario5/formulario5.component';
import { Formulario6Component } from './components/formulario6/formulario6.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FirstpageComponent,
    UltimapaginaComponent,
    Formulario1Component,
    MagisterbarComponent,
    Formulario2Component,
    Formulario3Component,
    Formulario4Component,
    Formulario5Component,
    Formulario6Component,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
