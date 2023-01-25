function checkPowerPoint(target: Object, propertyKey: string, descriptor: any) {
  /*
  console.log("method", propertyKey)
  console.log("descriptor ", descriptor)
  //Wconsole.log(ar)*/

  const originalMethod = descriptor.value

  descriptor.value = function(...args: any[]) {
     if(args[0].power<20) {
      console.log("cant attack")
     } else {
      originalMethod.call(this, ...args)
    }
    
  }
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
  
const move = {name: 'thunderbolt', power: 10};
const move2 = {name: 'thunderbolt', power: 90};

const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move2);

//;

//pikachu.figth(move);