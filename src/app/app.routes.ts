import { Routes, RouterModule} from '@angular/router';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Formulario3Component } from './components/formulario3/formulario3.component';
import { Formulario4Component } from './components/formulario4/formulario4.component';
import { Formulario5Component } from './components/formulario5/formulario5.component';
import { Formulario6Component } from './components/formulario6/formulario6.component';
import { UltimapaginaComponent } from './components/ultimapagina/ultimapagina.component';


const APP_ROUTES: Routes=[
  {path:'firstpage', component: FirstpageComponent},
  {path:'ultimapagina', component: UltimapaginaComponent},
  //{path:'formulario',component: FormularioComponent},
  {path:'formulario1',component: Formulario1Component},
  {path:'formulario2',component: Formulario2Component},
  {path:'formulario3',component: Formulario3Component},
  {path:'formulario',component: FormularioComponent},
  {path:'formulario5',component: Formulario5Component},
  {path:'formulario6',component: Formulario6Component},
  {path:'**', redirectTo: 'firstpage'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
