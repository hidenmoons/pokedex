export interface Stat{
    name:string
}
export interface Stats {
    
    base_stats:number,
    stat:Stat[]
}

export interface Home{
    
    home:{
        front_default:string
    }
    
 }
export interface Other{
    
    other:Home
    
 }
 export interface tipo{
    type:string
 }
export interface Slots{
   name:tipo[]
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
    stats: Stats[]
    moves: string[]
    types: Types[]
    species: string[]
}