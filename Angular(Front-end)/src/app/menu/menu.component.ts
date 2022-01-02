import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private route:ActivatedRoute, private router: Router) { 


  }
  usu: any;

  ngOnInit(): void {
    if(localStorage.getItem("usuario")  === null){
      alert("Iniciar sesión primero!");
      window.location.href = "/"
    }else{
      this.usu = localStorage.getItem("usuario")
      console.log("Usuario: " + this.usu)
    }
  }
}
     


