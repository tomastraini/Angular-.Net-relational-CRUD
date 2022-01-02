import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABMClientesComponent } from './abmclientes/abmclientes.component';
import { MenuComponent } from './menu/menu.component';
import { AbmlocalidadesComponent } from './abmlocalidades/abmlocalidades.component';
import { HttpClientModule } from '@angular/common/http';
import { TableFilterPipe } from "./mypipe";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableFilterPipeLocalidad } from "./pipeLocalidad";
import { LoginComponent } from './login/login.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { AbmusersComponent } from './abmusers/abmusers.component';
import { tableFilterUsuarios } from './pipeUsuarios';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    TableFilterPipe,
    TableFilterPipeLocalidad,
    AbmlocalidadesComponent,
    ABMClientesComponent,
    LoginComponent,
    CerrarsesionComponent,
    AbmusersComponent,
    tableFilterUsuarios,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
