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
    sprites: string
    stats: string[]
    moves: string[]
    types: Types[]

}