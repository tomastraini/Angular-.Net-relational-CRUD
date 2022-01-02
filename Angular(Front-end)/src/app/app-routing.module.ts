import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ABMClientesComponent } from "./abmclientes/abmclientes.component";
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AbmlocalidadesComponent } from './abmlocalidades/abmlocalidades.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { AbmusersComponent } from './abmusers/abmusers.component';

const routes: Routes = [
  { path: 'abmclientes', 
  component: ABMClientesComponent 
  },
  {path: "abmlocalidades",
  component: AbmlocalidadesComponent
  },
  {
    path: "cerrarsesion",
    component: CerrarsesionComponent
  },
  {
    path: "abmusers",
    component: AbmusersComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  { path: '**', 
  component: PagenotfoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [MenuComponent, ABMClientesComponent, AbmlocalidadesComponent, LoginComponent, PagenotfoundComponent]
