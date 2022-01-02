import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abmlocalidades',
  templateUrl: './abmlocalidades.component.html',
  styleUrls: ['./abmlocalidades.component.css']
})
export class AbmlocalidadesComponent implements OnInit {
  localidad: any;
  col=["CP", "Localidad"];
  buscarLocalidad: any;
  borrCP: any;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem("usuario")  === null){
      alert("Iniciar sesión primero!");
      window.location.href = "/"
    }else{
    this.http.get('https://localhost:44330/api/Localidades')
    .subscribe(Response1 => {
      if(Response1){ 
        console.log(Response1)
        this.localidad = Response1
      }
  })
  }

  }
  cpm: any;
  localidadm: any;

  modifClick(cpmo: any, locmo: any): void{
    this.cpm = cpmo;
    this.localidadm = locmo
  }

  ModificarLocalidad(datam: any){
    console.warn("DATOSSS: "+ datam);
    console.log(datam);
    const cpid = datam.cpmodif;
    var ModifLoc = 
    {
        "cp": datam.cpmodif,
        "localidad": datam.locNombre,
    };
    console.log("Modificar tarj: "+ Object.keys(ModifLoc));
    this.http.put('https://localhost:44330/api/Localidades/'+cpid, ModifLoc).subscribe(Response => {
      window.location.reload();
    })
  }

  borrarLocalidades(datab: any){
    const cpborrar = datab.cpborr;
    this.http.delete("https://localhost:44330/api/Localidades/"+cpborrar).subscribe(Response => {
      window.location.reload();
    })


  }
  borrClick(id: any): void{
    this.borrCP = id;
  }
  postAgregarLoc(data: any){
    
    var x  = 
    {
        "cp": data.CPAgregar,
        "localidad":data.LocalidadAgregar,
    };
    console.log(x);
    this.http.post('https://localhost:44330/api/Localidades', x).subscribe(Response => {
      window.location.reload();
    })
  }
}
