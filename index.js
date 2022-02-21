var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var human = /** @class */ (function () {
    function human(name, color) {
        // props
        this.name = name;
        this.shirtColor = color;
    }
    human.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    human.prototype.loadGcash = function (amount) {
        // loads cash at the shop
        this.gCashLoad += amount;
        console.log("".concat(this.name, " loaded ").concat(amount, " in Gcash"));
    };
    human.prototype.eat = function (food) {
        // eat chicken joy from jollibee
        this.tummy = food;
        console.log("".concat(this.name, " ate an ").concat(food));
    };
    human.prototype.doSomething = function (doWhat) {
        // do something
        this.isDoing = doWhat;
        console.log("".concat(this.name, " is doing ").concat(this.isDoing));
    };
    human.prototype.useWallet = function (amount, activity) {
        // add or use money
        this.walletStatus = "".concat(activity, " ").concat(amount);
        console.log("".concat(this.name, " just ").concat(activity, " ").concat(amount));
    };
    human.prototype.shirtForToday = function () {
        // black shirt is 🔥
        console.log("".concat(this.name, " is wearing ").concat(this.shirtColor[this.randomNumber(0, this.shirtColor.length)], " shirt"));
    };
    human.prototype.drinkBeer = function (bottles) {
        // drink only when sitting
        console.log("".concat(this.name, " drank ").concat(bottles, " of beer while ").concat(this.isDoing));
    };
    human.prototype.watchTv = function () {
        // when sitting or standing
        this.isSitting = true;
        this.isDoing = 'watching tv';
        console.log("".concat(this.name, " started watching tv"));
    };
    human.prototype.doSomeCoding = function () {
        // sitting or standing
        this.isSitting = true;
        this.isDoing = 'coding';
        console.log("".concat(this.name, " started coding"));
    };
    human.prototype.rideABike = function () {
        // ride a if standing
        this.isStanding = true;
        this.isDoing = 'riding a bike';
        console.log("".concat(this.name, " started riding a bike"));
    };
    human.prototype.detectedByDog = function (dogName, isGonna) {
        // cardio
        this.isStanding = true;
        this.isDoing = "being ".concat(isGonna, " by ").concat(dogName, ", a dog");
        console.log("".concat(dogName, " is ").concat(isGonna, " ").concat(this.name));
    };
    return human;
}());
/*
Based on the class that you have created on the previous exercises, please implement the following:
1. Inheritance
Create a parent class or set your class as a parent class.
Have a child class which will inherit 5 attributes and 5 methods
from your parent class.
s

2. Abstraction
Create an interface for your parent class (based on item 1) and
have your parent class implement 3 methods.

(WIP)
 */
var classmate = /** @class */ (function (_super) {
    __extends(classmate, _super);
    function classmate(name1, color, cuteness) {
        var _this = _super.call(this, name1, color) || this;
        _this.cutenessLevel = cuteness;
        return _this;
    }
    classmate.prototype.giveAnswer = function (name) {
        console.log("".concat(this.name, " gave answers to ").concat(name));
    };
    return classmate;
}(human));
var gem = new classmate('gem', ['black', 'white', 'red', 'blue'], 100);
function run() {
    gem.eat('Ice cream');
    gem.loadGcash(100000000);
    gem.shirtForToday();
}
run();
