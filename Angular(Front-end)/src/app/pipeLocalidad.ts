import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilterLocalidad'
})
export class TableFilterPipeLocalidad implements PipeTransform {

  transform(li: any[], value: string) {
  //.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

   return value ? li.filter(li => 
     li.cp.toString().includes(value) |
     li.localidad.toLowerCase().includes(value) |
     li.localidad.includes(value) |
     li.localidad.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) |
     li.localidad.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").includes(value) 
    ) : li;

  }
}   