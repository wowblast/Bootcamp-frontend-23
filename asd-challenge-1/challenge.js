class Pokemon {
    _name = '';
    _type = '';
    _evolution = 1;
    constructor(name, type, evolution) {
        this._name = name;
        this._type = type;
        this._evolution = evolution;

    }

    get name() {
        return this._name;
    }
    set name(newname){
        this._name = newname;

    }
    get type() {
        return this._type;
    }
    set type(newtype){
        this._type = newtype;

    }
    get evolution() {
        return this._evolution;
    }
    set evolution(newevolution){
        this._evolution = newevolution;

    }
    attack(enemy) {
        return this._name + " is attacking " + enemy
    }

    evolve() {
        this._evolution = 2;
        return this._name + " is evolving lvl " + this._evolution;
    }

    displayInfo() {
        return {"name": this._name , "type":this._type, "evolution":this._evolution} 

    }

}

pokemon = new Pokemon("mj","str","5")
console.log(pokemon.name)
pokemon.name = "mitchyj"
console.log(pokemon.name)

console.log(pokemon.attack("ok"))
console.log(pokemon.evolve())
console.log(pokemon.displayInfo())



