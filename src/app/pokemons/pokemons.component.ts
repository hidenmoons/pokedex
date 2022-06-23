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
  // newpokemons: Pokemons | any;
  newpokemons: string[] = [];
  constructor(
    private pokemonservice: PokeServiceService
  ) { }
  private limit = 6
  private offset = 6
  private test = ''
  ngOnInit(): void {
    for (let i = 1; i <= 6; i++) {
      this.pokemonservice.getPokemon(i).
        subscribe((data) => {

          this.pokemons.push(data)

        })
    }

  }



  nextpokemons() {
    let i=0
    this.pokemonservice.getAllPokemons(this.limit, this.offset).
      subscribe((data) => {

        this.pokemons.splice(0, this.pokemons.length)
        this.newpokemons.splice(0, this.newpokemons.length)

        for (let index = 0; index < 6; index++) {
          
          this.newpokemons.push(data.results[index].name)
        }
        while(i<this.newpokemons.length){
          this.pokemonservice.getPokemon(this.newpokemons[i]).
        subscribe((data1) => {

          this.pokemons.push(data1)
        })
        i++;
        }
        
        console.log(this.pokemons)
        console.log(this.newpokemons)
        this.offset += this.limit;

      })

  }

  prevpokemons(){
    this.offset=this.offset-6;
    this.pokemonservice.getAllPokemons(this.limit, this.offset).
      subscribe((data) => {
        console.log(data)
    this.pokemons.splice(0, this.pokemons.length)
    this.newpokemons.splice(0, this.newpokemons.length)
       
        for (let index = 0; index < 6; index++) {

          this.newpokemons.push(data.results[index].name)
          this.pokemonservice.getPokemon(this.newpokemons[index]).
            subscribe((data1) => {
              this.pokemons.push(data1)
            })
        }

       
      

      })

  }
}
