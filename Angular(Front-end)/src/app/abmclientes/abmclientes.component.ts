import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-abmclientes',
  templateUrl: './abmclientes.component.html',
  styleUrls: ['./abmclientes.component.css']
})
export class ABMClientesComponent implements OnInit {
  cli:any;
  loc: any;
  join: any;
  borrid: any;
  x: any;
  selectedCliLoc: any;
  col=["ID", "Nombre", "Telefono", "Localidad"];
  busquedavalue: any;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem("usuario")  === null){
      alert("Iniciar sesión primero!");
      window.location.href = "/"
    }else{
    this.http.get('https://localhost:44330/api/Clientes')
    .subscribe(Response => {
      if(Response){ 
        
      }

      this.cli=Response;
      
    });

    this.http.get('https://localhost:44330/api/Localidades')
    .subscribe(Response1 => {
      if(Response1){ 
        this.loc=Response1;
        var x = 0;
        var i = 0
        
        while ((x <=  Object.keys(this.loc).length)){
          var cp = this.cli[i].cp;
          
          var cpid = this.loc[x].cp;
          var loc = this.loc[x].localidad;

          if ((cp == cpid) && (i <= Object.keys(this.cli).length)) {
            this.cli[i].cp = loc
            i = 0;
            i = i + 1
          }else{
            if ((cp == cpid) && (i >= Object.keys(this.cli).length)) {
              this.cli[i].cp = loc
              i = 0;
              x = x + 1;
            }else if(i >= Object.keys(this.cli).length - 1){
              i = 0
              x = x + 1;
            }else{
              i = i + 1
            }
          }
        }
        }
    });
  
  }
  }

  borrClick(id: any): void{
    this.borrid = id;
  }

  postAgregarCli(data: any){
    
    var x  = 
    {
        "razon_social": data.nombrecli,
        "telefono":data.telcli,
        "cp":data.cpcli,
    };
    console.log(x);
    this.http.post('https://localhost:44330/api/Clientes', x).subscribe(Response => {
      window.location.reload();
    })
  }
  borrarCliente(datab: any){
    const id_cliente = datab.idcliente;
    this.http.delete("https://localhost:44330/api/Clientes/"+id_cliente).subscribe(Response => {
      window.location.reload();
    })
  }

  cliId: any;
  cliNombre: any;
  cliTelefono: any;
  cliLocalidad: any;
  modifClick(id: any, clinom: any, clitel: any, cliLocc: any): void{
    this.cliId = id;
    this.cliNombre = clinom
    this.cliTelefono = clitel;



    var newlok = this.buskrLoc(this.loc, cliLocc)
    this.selectedCliLoc = newlok[0].cp;

  }
  buskrLoc(li: any[], value: string) {
     return value ? li.filter(li => 
       li.localidad.toLowerCase().includes(value.toLowerCase()) |
       li.localidad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value.toLowerCase())
      ) : li;
    }
    ModificarCliente(datam: any){
      console.warn("DATOSSS: "+ datam);
      console.log(datam);
      const id_cliente = datam.idClienm;
      var ModifCli = 
      {
          "id_cliente": datam.idClienm,
          "razon_social": datam.cliNombrem,
          "telefono":datam.cliTelefonom,
          "cp":datam.cpclikm 
      };
      console.log("Modificar tarj: "+ Object.keys(ModifCli));
      this.http.put('https://localhost:44330/api/Clientes/'+id_cliente, ModifCli).subscribe(Response => {
        window.location.reload();
      })
    }
}
