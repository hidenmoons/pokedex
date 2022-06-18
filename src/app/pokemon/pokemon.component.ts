import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../Services/poke-service.service';
import { Pokemon } from '../models/Pokemon.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemonstats: any[] = [];
  pokemonimg: any[] = [];
  pokemon: Pokemon | any;
  pokemontype: Pokemon | any;
  id =0;
  constructor(
    private pokemonservice: PokeServiceService
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }
  getPokemon() {
    
    this.pokemonservice.getPokemonstats('1')
      .subscribe(data => {

        //let pokemonarray = []
        this.pokemon = data
        let pokemontipo: string[] = []
        console.log(data, 'data')
        for (let index = 0; index < data.types.length; index++) {

          //pokemontipo = data.types[index].type.name
          this.pokemonstats.push(data.types[index].type.name)

        }
        this.pokemontype = this.pokemonstats
        console.log(this.pokemonstats)
      })

  }
  alert(){
    alert('click')
  }
  getPokemonimg(){
   

    this.pokemonservice.getPokemonstats(this.id.toString())
      .subscribe(data => {

        //let pokemonarray = []
        this.pokemon = data
        let pokemontipo: string[] = []
        console.log(data, 'data')
        for (let index = 0; index <1; index++) {
          
          
        this.pokemonimg.push(data.sprites.other.home.front_default)
        
          console.log(this.pokemonimg,'dentro del for img')
        }
        console.log(this.pokemon.stats[1],'fuera del for')
        //this.pokemontype = this.pokemonstats
      })
      this.id++;
      
  }
}
