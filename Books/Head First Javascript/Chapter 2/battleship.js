let location1 = 3, location2 = 4, location3 = 5;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
	let guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");

	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
			}
		} else {
			alert("MISS");
		}
	}
}

let stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " +
	(3/guesses);

alert(stats);
