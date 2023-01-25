function checkPowerPoint(target: Object, propertyKey: string, descriptor: any) {
  /*console.log("clase", target.constructor.prototype)
  console.log("method", propertyKey)
  console.log("descriptor ", descriptor)*/
  //Wconsole.log(ar)

  descriptor.value = function( ...args: any[]) {
    console.log("power "+ args[0].power)
    if(args[0].power < 20) {
console.log("cant attack with "+ args[0].power)
return null
    } else {
      return descriptor
    }


  }
  return descriptor



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
  
const move = {name: 'thunderbolt', power: 10};
const move2 = {name: 'thunderbolt', power: 90};

const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move2);

//pikachu.figth(move);