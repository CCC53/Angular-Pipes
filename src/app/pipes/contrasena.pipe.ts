import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean = true): string {
    if (mostrar) {
      let oculto = [];
      for (let i = 0; i< value.length; i++) {
        oculto.push('*');
      }
      return oculto.join('');
    } else {
      return value;
    }
  }

}