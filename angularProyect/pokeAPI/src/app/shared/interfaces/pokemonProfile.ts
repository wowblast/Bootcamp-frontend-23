export interface PokemonProfile {
    name: string,
    sprites: {
        back_default: string
    },
    id: string,
    species: {
        name: string,
        url: string
    }
    evolutions?: {
        evolutionName: string,
        evolutionLink: string
    }[]
}