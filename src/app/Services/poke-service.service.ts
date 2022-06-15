import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon.model';
import { retry, catchError, map, switchMap } from 'rxjs';
import { throwError, zip } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  private apiurl = '/api/v2/pokemon/'

  constructor(
    private http: HttpClient,
  ) { }

  getPokemon(id: string) {
    return this.http.get<Pokemon>(`${this.apiurl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == HttpStatusCode.Conflict) {
            return throwError('ups algo se rompio en el server')
          } if (error.status == HttpStatusCode.NotFound) {
            return throwError('el producto no existe')
          }
          if (error.status == HttpStatusCode.Unauthorized) {
            return throwError('no estas autorizado')
          }
          return throwError('ups algo se rompio')
        })
      )
  }

  getPokemonID(id: string){
    return this.getPokemon(id)
    .pipe(
     
    )
  }

  getPokemonstats(id: string) {
    return this.http.get<Pokemon>(`${this.apiurl}/${id}`)
      
  }
}
