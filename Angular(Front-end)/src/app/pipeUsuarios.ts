import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilterUsuarios'
})
export class tableFilterUsuarios implements PipeTransform {

  transform(li: any[], value: string) {
  //.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

   return value ? li.filter(li => 
     li.id_usuario.toString().includes(value) |

     li.usuario.toLowerCase().includes(value) |
     li.usuario.includes(value) |
     li.usuario.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) |
     li.usuario.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").includes(value) |

     li.pass.toLowerCase().includes(value) |
     li.pass.includes(value) |
     li.pass.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) |
     li.pass.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").includes(value) |

     li.permiso.toLowerCase().includes(value) |
     li.permiso.includes(value) |
     li.permiso.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) |
     li.permiso.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").includes(value) 


    ) : li;

  }
}   