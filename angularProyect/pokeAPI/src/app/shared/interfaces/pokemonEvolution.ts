export interface PokemonEvolution {
    id: string,
    chain: {
        species: string,
        evolves_to: EvolutionChain []
    }
}

interface EvolutionChain {
    evolves_to: EvolutionChain[]
    species: {
        name: string,
        url: string
    }
}