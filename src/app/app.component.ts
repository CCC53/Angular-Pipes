import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Anakin Skywalker';
  nombre2: string = 'cArloS caLeTtE coRnEliO';
  numeros:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje:number = 0.125;
  salario:number = 1234.5;
  fecha: Date = new Date();
  idioma:string = 'es';
  video:string = 'https://www.youtube.com/embed/6M5862rG4m4';
  activar:boolean = true;

  jedi = {
    nombre: 'Anakin',
    apellido: 'Skywalker',
    edad: 27,
    origen: {
      planeta: 'tatooine',
      casa: 30
    }
  };
  
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego penny');
    }, 4500);
  });

}
