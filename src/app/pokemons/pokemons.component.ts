import { Component, OnInit,Input } from '@angular/core';
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
  @Input() pokemons1: Pokemons[] = [];
  constructor(
    private pokemonservice:PokeServiceService
  ) { }

  ngOnInit(): void {
   this.getpokemon()
  }

  getpokemon(){
    for(let i=1; i<=10; i++){
    this.pokemonservice.getPokemon(i).subscribe(data=>{
      this.pokemons=data
      
    })
    console.log(this.pokemons)
  }
  }
  getall(){
    this.pokemonservice.getAllPokemons(10,0)
    .subscribe(data=>{
      this.pokemons1=data;
    });
    console.log(this.pokemons1,'pokemons1')
  }
}
