import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  private extraerDatos(res: Response): any {
    const body = res;
    return body || { };
  }

  buscarPersonaje(personaje: string): Observable<any> {
    return this.http.get(this.endpoint + 'people/?search=' + personaje).pipe(
      map(this.extraerDatos)
    );
  }
}
