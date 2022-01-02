import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(li: any[], value: string) {
  //.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

   return value ? li.filter(li => 
     li.id_cliente.toString().includes(value) |
     li.razon_social.toLowerCase().includes(value) |
     li.telefono.toLowerCase().includes(value) |
     li.cp.toLowerCase().includes(value) |
     li.razon_social.includes(value) |
     li.telefono.includes(value) |
     li.cp.includes(value) |
     li.razon_social.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) |
     li.telefono.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) |
     li.cp.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) |
     li.razon_social.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value) |
     li.telefono.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value) |
     li.cp.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value) 
    ) : li;

  }
}   