import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-peticion-api',
  templateUrl: './peticion-api.component.html',
  styleUrls: ['./peticion-api.component.css']
})
export class PeticionApiComponent implements OnInit {

  constructor(
    public rest: RestService
  ) { }

  ngOnInit(): void {
  }

  buscarPersonaje() {
    let personaje = (<HTMLInputElement>document.getElementById('personaje')).value;
    var nombre: string;

    if (!personaje) {
      (<HTMLInputElement>document.getElementById('error')).setAttribute('style', 'visibility: visible');
    } else {
      this.rest.buscarPersonaje(personaje).subscribe((resp: any) => {
        if (resp.results.length != 0) {
          console.log(resp.results[0]);
          (<HTMLInputElement>document.getElementById('nombre')).innerHTML = resp.results[0].name;
          (<HTMLInputElement>document.getElementById('altura')).innerHTML = resp.results[0].height;
          (<HTMLInputElement>document.getElementById('peso')).innerHTML = resp.results[0].mass;
          (<HTMLInputElement>document.getElementById('fecha')).innerHTML = resp.results[0].birth_year;
          (<HTMLInputElement>document.getElementById('informacion')).setAttribute('style', 'visibility: visible');
          (<HTMLInputElement>document.getElementById('error')).setAttribute('style', 'visibility: hidden');
        } else {
          (<HTMLInputElement>document.getElementById('informacion')).setAttribute('style', 'visibility: hidden');
          (<HTMLInputElement>document.getElementById('error')).setAttribute('style', 'visibility: visible');
        }
      });
    }

    (<HTMLInputElement>document.getElementById('personaje')).value = '';
  }

}
