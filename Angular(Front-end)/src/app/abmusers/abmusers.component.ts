import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abmusers',
  templateUrl: './abmusers.component.html',
  styleUrls: ['./abmusers.component.css']
})
export class AbmusersComponent implements OnInit {
  usuarios: any;
  col=["ID", "Usuario", "Contraseña", "Permiso"];
  buscarUsuario: any;
  borrUS: any;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem("usuario")  === null){
      alert("Iniciar sesión primero!");
      window.location.href = "/"
    }else{
    this.http.get('https://localhost:44330/api/Usuarios')
    .subscribe(Response1 => {
      if(Response1){ 
        console.log(Response1)
        this.usuarios = Response1
      }
  })
  }

  }
  usid: any;
  usnam: any;
  uspass:any
  uspermis:any

  modifClick(idus: any, us: any, passus:any, permisus: any): void{
    this.usid = idus;
    this.usnam = us;
    this.uspass = passus;
    this.uspermis = permisus;
  }

  ModificarUsuarios(datam: any){
    console.warn("DATOSSS: "+ datam);
    console.log(datam);
    const UUSID = datam.usmodif;
    var ModifLoc = 
    {
      "id_usuario": UUSID,
      "usuario": datam.USmodifNAM,
      "pass": datam.USpassMod,
      "permiso": datam.permisUsCSMOD
    };
    console.log(ModifLoc);

    this.http.put('https://localhost:44330/api/Usuarios/'+UUSID, ModifLoc).subscribe(Response => {
      window.location.reload();
    })
  }

  borrarUsuarios(datab: any){
    const idusBorr = datab.usborr;
    this.http.delete("https://localhost:44330/api/Usuarios/"+idusBorr).subscribe(Response => {
      window.location.reload();
    })


  }
  borrClick(id: any): void{
    this.borrUS = id;
  }
  postAgregarUS(data: any){
    console.log(data)
    var x  = 
    {
        "usuario": data.USagregar,
        "pass":data.ContraseUS,
        "permiso": data.permisUsCS,
    };
    console.log(x);
    this.http.post('https://localhost:44330/api/Usuarios', x).subscribe(Response => {
      window.location.reload();
    })
  }

}
