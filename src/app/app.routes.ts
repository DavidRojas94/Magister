import { Routes, RouterModule} from '@angular/router';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Formulario3Component } from './components/formulario3/formulario3.component';
import { UltimapaginaComponent } from './components/ultimapagina/ultimapagina.component';


const APP_ROUTES: Routes=[
  {path:'firstpage', component: FirstpageComponent},
  {path:'ultimapagina', component: UltimapaginaComponent},
  {path:'formulario',component: FormularioComponent},
  {path:'formulario1',component: Formulario1Component},
  {path:'formulario2',component: Formulario2Component},
  {path:'formulario3',component: Formulario3Component},
  {path:'**', redirectTo: 'firstpage'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
