interface Chill {
	bedColor: string;
	game: string;
	rank: string;
	isSmiling: boolean;
	havingCoffee: boolean;

	sleep(): string;
	play(): string;
	isHappy(): boolean;
}

abstract class human {
	name: string;
	tummy: string;
	isDoing: string;
	isSitting: boolean;
	isStanding: boolean;
	gCashLoad: number;
	walletStatus: string;
	shirtColor: string[];

	constructor(name: string, color: string[]) {
		// props
		this.name = name;
		this.shirtColor = color;
	}

	randomNumber(min: number, max: number) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	loadGcash(amount: number): void {
		// loads cash at the shop
		this.gCashLoad += amount;
		console.log(`${this.name} loaded ${amount} in Gcash`);
	}

	eat(food: string): void {
		// eat chicken joy from jollibee
		this.tummy = food;
		console.log(`${this.name} ate an ${food}`);
	}

	doSomething(doWhat: string): void {
		// do something
		this.isDoing = doWhat;
		console.log(`${this.name} is doing ${this.isDoing}`);
	}

	useWallet(amount: number, activity: string): void {
		// add or use money
		this.walletStatus = `${activity} ${amount}`;

		console.log(`${this.name} just ${activity} ${amount}`);
	}

	shirtForToday(): void {
		// black shirt is 🔥
		console.log(
			`${this.name} is wearing ${
				this.shirtColor[this.randomNumber(0, this.shirtColor.length)]
			} shirt`
		);
	}

	drinkBeer(bottles: number): void {
		// drink only when sitting
		console.log(`${this.name} drank ${bottles} of beer while ${this.isDoing}`);
	}

	watch(movie: string): void {
		// when sitting or standing
		this.isSitting = true;
		this.isDoing = `watching ${movie}`;
		console.log(`${this.name} started watching tv`);
	}

	doSomeCoding(): void {
		// sitting or standing
		this.isSitting = true;
		this.isDoing = 'coding';
		console.log(`${this.name} started coding`);
	}

	rideABike(): void {
		// ride a if standing
		this.isStanding = true;
		this.isDoing = 'riding a bike';
		console.log(`${this.name} started riding a bike`);
	}

	detectedByDog(dogName: string, isGonna: string): void {
		// cardio
		this.isStanding = true;
		this.isDoing = `being ${isGonna} by ${dogName}, a dog`;
		console.log(`${dogName} is ${isGonna} ${this.name}`);
	}

	abstract chill(): Chill;
}

/*
Based on the class that you have created on the previous exercises, please implement the following:
1. Inheritance
Create a parent class or set your class as a parent class. 
Have a child class which will inherit 5 attributes and 5 methods 
from your parent class.


2. Abstraction
Create an interface for your parent class (based on item 1) and 
have your parent class implement 3 methods.

(WIP)
 */

class classmate extends human {
	cutenessLevel: number;

	constructor(name1: string, color: string[], cuteness: number) {
		super(name1, color);
		this.cutenessLevel = cuteness;
	}

	public chill(): Chill {
		const person = {
			bedColor: 'white',
			game: 'valo',
			rank: 'predator',
			isSmiling: true,
			havingCoffee: true,

			sleep() {
				return 'sleeping';
			},
			play() {
				return `playing ${this.game}`;
			},
			isHappy() {
				return true;
			},
		};

		return person;
	}

	attributes(): void {
		console.log([
			this.name,
			this.tummy,
			this.isDoing,
			this.isSitting,
			this.isStanding,
			this.gCashLoad,
			this.walletStatus,
			this.shirtColor,
		]);
	}
}

const gem = new classmate('gem', ['black', 'white', 'red', 'blue'], 100);

function run(): void {
	gem.eat('Ice cream');
	gem.loadGcash(100000000);
	gem.shirtForToday();
	gem.watch('aot');
	gem.detectedByDog('spark', 'licking');
	gem.useWallet(9999999, 'added');
	gem.attributes();
}

run();
