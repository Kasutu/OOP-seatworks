class human {
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

	public loadGcash(amount: number): void {
		// loads cash at the shop
		this.gCashLoad += amount;
	}

	eat(food: string) {
		// eat chicken joy from jollibee
		this.tummy = `recently ate: ${food}`;
	}

	doSomething(doWhat: string) {
		// do something
		this.isDoing = doWhat;
	}

	useWallet(amount: number, activity: string) {
		// add or use money
		this.walletStatus = `${activity} ${amount}`;

		console.log(`${this.name} just ${activity} ${amount}`);
	}

	shirtForToday() {
		// black shirt is 🔥
		console.log(`${this.name} is wearing ${this.shirtColor} shirt`);
	}

	drinkBeer(bottles: number) {
		// drink only when sitting
		console.log(`${this.name} drank ${bottles} of beer while ${this.isDoing}`);
	}

	watchTv() {
		// when sitting or standing
		this.isSitting = true;
		this.isDoing = 'watching tv';
		console.log(`${this.name} started watching tv`);
	}

	doSomeCoding() {
		// sitting or standing
		this.isSitting = true;
		this.isDoing = 'coding';
		console.log(`${this.name} started coding`);
	}

	rideABike() {
		// ride a if standing
		this.isStanding = true;
		this.isDoing = 'riding a bike';
		console.log(`${this.name} started riding a bike`);
	}

	detectedByDog(dogName: string, isGonna: string) {
		// cardio
		this.isStanding = true;
		this.isDoing = `being ${isGonna} by ${dogName}, a dog`;
		console.log(`${dogName} is ${isGonna} ${this.name}`);
	}
}
