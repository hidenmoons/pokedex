export interface Home{
    
    home:{
        front_default:string
    }
    
 }
export interface Other{
    
    other:Home
    
 }
export interface Slots{
   name:string[]
   url:string 
}
export interface Types {
    
    type: Slots
}

export interface Pokemon {
    id: string
    name: string
    weight: number
    move: string[]
    sprites: Other
    stats: string[]
    moves: string[]
    types: Types[]
    species: string[]
}