export interface Types {
    type: string
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