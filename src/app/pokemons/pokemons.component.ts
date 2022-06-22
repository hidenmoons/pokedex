import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { Pokemons } from '../models/Pokemons.model';
import { PokeServiceService } from '../Services/poke-service.service';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];
  constructor(
    private pokemonservice: PokeServiceService
  ) { }
  private limit=0
  private offset=0
  ngOnInit(): void {
    this.getpokemon()
  }

  getpokemon() {
    for (let i = 1; i <= 6; i++) {
      this.pokemonservice.getPokemon(i).subscribe((data) => {
        
        this.pokemons.push(data)

      })
    }
    console.log(this.pokemons, 'arrays pokemons')
  }

  nextpokemons(){
    this.pokemonservice.getAllPokemons(6,6).subscribe(data=>{
      console.log(data)
    })
  }

}
