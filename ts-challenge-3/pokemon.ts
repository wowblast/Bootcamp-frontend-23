import fetch from "node-fetch";

function checkPowerPoint(target: Object, propertyKey: string, descriptor: any) {
  /*
  
  console.log("method", propertyKey)
  console.log("descriptor ", descriptor)
  //Wconsole.log(ar)*/
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {

    if (this.ppAvailable < 1) {
      console.log("cant attack");
    } else {
      originalMethod.call(this, ...args);
    }
  };
  return descriptor;
}

class Pokemon {
  name: string;
  ppAvailable = 1;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }

  @checkPowerPoint
  figth(move: any) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }
}

const move = { name: "thunderbolt", power: 10 };
const move2 = { name: "thunderbolt", power: 90 };

const pikachu = new Pokemon("pikachu", 1);
//pikachu.figth(move);
//pikachu.figth(move2);
type Consturctor = { new (...args: any[]): any };

function getPokemonsId(pokemons: number) {
  let pokemonsIDs: number[] = [];
  for (let index = 0; index < pokemons; index++) {
    pokemonsIDs.push(Math.round(Math.random() * 1000));
  }

  return <T extends Consturctor>(BaseClass: T) => {
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
  pokemonsAmount: number = 0;
  constructor(name: string, pokemonsAmount: number) {
    this.name = name;
    this.pokemonsAmount = pokemonsAmount;
    //console.log("tiene "+ pokemonsAmount)
  }
  async getPokemons() {
    this.pokemons.forEach(async pokemon => {
      console.log('https://pokeapi.co/api/v2/pokemon/'+ pokemon)
      fetch('https://pokeapi.co/api/v2/pokemon/'+ pokemon, {})
    .then((response) => response.text())
    .then((body) => {
      const data = JSON.parse(body)
        console.log(this.name + ' has '+data.forms[0].name);
        const move = { name: data.moves[0].move.name, power: 90 };

        const newPokemon = new Pokemon(data.forms[0].name, 1);
        newPokemon.figth(move);
        newPokemon.figth(move);


    });
      
    });
  

     
  }
}

new Trainer('james',1).getPokemons();

//;

//pikachu.figth(move);
// tsc ./pokemon.ts  --target ES5 --experimentalDecorators  && node .\pokemon.js --experimental-fetch