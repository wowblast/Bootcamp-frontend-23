var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function checkPowerPoint(target, propertyKey, descriptor) {
    /*
    console.log("method", propertyKey)
    console.log("descriptor ", descriptor)
    //Wconsole.log(ar)*/
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[0].power < 20) {
            console.log("cant attack");
        }
        else {
            originalMethod.call.apply(originalMethod, __spreadArray([this], args, false));
        }
    };
    return descriptor;
}
var Pokemon = /** @class */ (function () {
    function Pokemon(name, ppAvailable) {
        this.ppAvailable = 1;
        this.name = name;
        this.ppAvailable = ppAvailable;
    }
    Pokemon.prototype.figth = function (move) {
        console.log("".concat(this.name, " used ").concat(move === null || move === void 0 ? void 0 : move.name, "!"));
        this.ppAvailable -= 1;
    };
    __decorate([
        checkPowerPoint
    ], Pokemon.prototype, "figth", null);
    return Pokemon;
}());
var move = { name: 'thunderbolt', power: 10 };
var move2 = { name: 'thunderbolt', power: 90 };
var pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move2);
//;
//pikachu.figth(move);
