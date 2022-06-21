import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon.model';
import { retry, catchError, map, switchMap } from 'rxjs';
import { throwError, zip } from 'rxjs';
import { Pokemons } from '../models/Pokemons.model';
@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  private apiurl = '/api/v2/pokemon/'

  constructor(
    private http: HttpClient,
  ) { }

  getPokemon(id: number) {
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

  getAllPokemons(limit?:number, offset?:number){
    let params=new HttpParams();
    if(limit&& offset){
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Pokemons[]>(`${this.apiurl}`,{params})
  }
}
