export interface PokemonSpecies {
    id: string,
    evolution_chain: {
        url: string
    },
    flavor_text_entries: {
        flavor_text:string
    }[]
}