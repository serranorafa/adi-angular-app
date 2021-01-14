import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {
  urlAPI = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  private extraerDatos(res: Response): any {
    const body = res;
    return body || { };
  }

  buscarPersonaje(personaje: string): Observable<any> {
    return this.http.get(this.urlAPI + 'people/?search=' + personaje).pipe(
      map(this.extraerDatos)
    )
  }
}
