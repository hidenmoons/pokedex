import { Component, OnInit } from '@angular/core';
import {PokeServiceService } from '../Services/poke-service.service';
import { Pokemon } from '../models/Pokemon.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon| null=null;
  constructor(
    private pokemonservice:PokeServiceService
  ) { }

  ngOnInit(): void {
    
  }
  getPokemon()
  {
    this.pokemonservice.getPokemon('1')
    .subscribe(data=>{
      this.pokemon= data;
      console.log(this.pokemon)
    }) ;
  }
 
}
