import fetch from "node-fetch";

function checkPowerPoint(target: Object, propertyKey: string, descriptor: any) {
  /*
  
  console.log("method", propertyKey)
  console.log("descriptor ", descriptor)
  //Wconsole.log(ar)*/
  const originalMethod = descriptor.value;
  descriptor.value = function (args: Move) {

    if (this.ppAvailable < 1) {
      console.log("cant attack");
    } else {
      originalMethod.call(this, args);
    }
  };
  return descriptor;
}

interface Move {
  name: string,
  power: number
}

class Pokemon {
  name: string;
  ppAvailable = 1;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }

  @checkPowerPoint
  figth(move: Move) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }
}


type Constructor = { new (...args: any[]): Trainer };

function getPokemonsId(pokemons: number) {
  let pokemonsIDs: number[] = [];
  for (let index = 0; index < pokemons; index++) {
    pokemonsIDs.push(Math.round(Math.random() * 1000));
  }

  return <T extends Constructor>(BaseClass: T) => {
    console.log(BaseClass);
    return class extends BaseClass {
      pokemons = pokemonsIDs;
    };
  };
}

@getPokemonsId(2)
class Trainer {
  name: string;
  pokemons: number[];
  constructor(name: string) {
    this.name = name;
  }
  async getPokemons() {
    this.pokemons.forEach(async pokemon => {
      console.log('https://pokeapi.co/api/v2/pokemon/'+ pokemon)
      fetch('https://pokeapi.co/api/v2/pokemon/'+ pokemon, {})
    .then((response) => response.text())
    .then((body) => {
      const data = JSON.parse(body)
        console.log(this.name + ' has '+data.forms[0].name);
        const move: Move = { name: data.moves[0].move.name, power: 90 };

        const newPokemon = new Pokemon(data.forms[0].name, 1);
        newPokemon.figth(move);
        newPokemon.figth(move);
    });
      
    });
  

     
  }
}

new Trainer('james').getPokemons();


// tsc ./pokemon.ts  --target ES5 --experimentalDecorators  && node .\pokemon.js --experimental-fetch