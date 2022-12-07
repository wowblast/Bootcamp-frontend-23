class Pokemon {
    #name = '';
    #type = [];
    #evolution = [];
    constructor(name, type, evolution) {
        this.#name = name;
        this.#type = type;
        this.#evolution = evolution;

    }

    get name() {
        return this.#name;
    }
    set name(newname){
        this.#name = newname;

    }
    get type() {
        return this.#type;
    }
    set type(newtype){
        this.#type.push(newtype);

    }
    get evolution() {
        return this.#evolution;
    }
    set evolution(newevolution){
        this.#evolution.push(newevolution);

    }
    attack(enemy) {
        return this.#name + " is attacking " + enemy
    }

    evolve() {
        return this.#name + " is evolving " + this.#evolution[Math.floor(Math.random() * (this.#evolution.length-1))];
    }

    displayInfo() {
        return {"name": this.#name , "type":this.#type, "evolution":this.#evolution} 

    }

}

pokemon = new Pokemon("mj",["fire","frost"],["ev1","ev2"])
console.log(pokemon.name)
pokemon.name = "mitchyj"
console.log(pokemon.name)

console.log(pokemon.attack("ok"))
console.log(pokemon.evolve())
console.log(pokemon.displayInfo())



