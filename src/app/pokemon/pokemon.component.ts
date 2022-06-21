import { Component, Input, OnInit } from '@angular/core';
import { PokeServiceService } from '../Services/poke-service.service';
import { Pokemon } from '../models/Pokemon.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
   @Input() pokemon: Pokemon | any;

  id = 0;
  constructor(
    private pokemonservice: PokeServiceService
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }
  getPokemon() {
    this.id++;
    if (this.id <= 0) { this.id = 1 }
    this.pokemonservice.getPokemon(this.id)
      .subscribe(data => {
        this.pokemon = data
      })


  }
  getPokemonprev() {
    this.id--;
    if (this.id <= 0) { this.id = 1 }
    this.pokemonservice.getPokemon(this.id)
      .subscribe(data => {
        this.pokemon = data
      })

  }
  alert() {
    alert('click')
  }
}
