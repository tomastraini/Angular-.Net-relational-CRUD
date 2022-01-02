import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuComponent } from '../menu/menu.component';
import { Data, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
  constructor(private http : HttpClient) { }

  //variables
  usuarios: any;
  ResultadoPostUsu:any;
  mensajeLogin: any;
  showMe: boolean = false;
  //end-variables

  ngOnInit(): void {

  }

  postLoguearse(cajastext: any){
    var usu = cajastext.usuarioinput
    var pass = cajastext.passwordinput
    if(usu == "" ||usu == null){
        this.mensajeLogin = "Rellenar campo usuario!"
        this.showMe = true
    }else if (pass == "" || pass == null){
        this.showMe = true
        this.mensajeLogin = "Rellenar campo contraseña!"
    }else{
    
        this.http.get('https://localhost:44330/api/Usuarios')
        .subscribe(Response => {
          if(Response){ 
            this.usuarios = Response

            var filtre = this.buscarUsuarios(this.usuarios, usu, pass)

            if(filtre == null || filtre.length == 0){
              this.showMe = true
              this.mensajeLogin = "Certificaciones inválidas!"
            }else{
              if((usu == filtre[0].usuario) && (pass == filtre[0].pass)){
                this.ResultadoPostUsu = usu;

                localStorage.setItem("usuario", usu)
                window.location.href="/menu"
                

              }else{
                this.mensajeLogin = "Certificaciones inválidas!"
                this.showMe = true
              }
           }
          }
        })
    }
  }


  buscarUsuarios(li: any[], usuc: string, passc: string) {
    if(li.length === 0 || usuc == null || passc == null){
      return "error"
    }else{
      return usuc ? li.filter(li => 
        li.usuario.toString() == usuc.toString() &&
        li.pass.toString() == passc.toString()
       ) : li;
    }

   }
}
