

var yourMove;
var compMove;
var savedCompMove;
var yourHealth = 100;
var compHealth = 100;


var totRounds = 0;

// "attack"

var res;
var playByPlay = document.getElementById('announcements');
var yourHealthBar = document.getElementById('yourHealthBar');
var compHealthBar = document.getElementById('compHealthBar');
var punchButton = document.getElementById('attack');
var counterButton = document.getElementById('counter');
var playAgain = document.getElementById('playAgain');



function enableButtons() {
	punchButton.disabled = false;
	counterButton.disabled = false;
}

//Moves >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// triggers the fight in the HTML
function fight(id) {
	addRound();
	compMove(id);
	healthChange();
	gameOver();
}
// adds a round to the round counters
function addRound() {
	totRounds += 1;
}

//adds the counter action to punch
function counter(y, c) {
	var move = Math.floor((Math.random()*5));
	if (move >= 3 && y === "attack") {
		res = 'Computers counter was successful! You took 10 damage';
		yourHealth -= 10;
	} else if (move >= 3 && y === 'counter') {
		res = 'Your counter was successful! Comp took 10 damage';
		compHealth -= 10;
	} else if (move < 3 && y === "attack") {
		res = 'Computer counter failed! You dealt 15 damage!';
		compHealth -= 15;
	} else if (move < 3 && y === 'counter') {
		res = 'Your counter was not successful! You were dealt 15 damage!';
		yourHealth -= 15;
	}

}

// Dislpays results of the round
function roundResults(res) {
	playByPlay.innerHTML += res + "<br>";
}

function healthChange() {
	yourHealthBar.style.width = yourHealth + "%";
	compHealthBar.style.width =  compHealth + "%";
}

function gameOver() {
	if (yourHealth === 0 || compHealth === 0) {
		res = 'GAME OVER!';
		roundResults(res);
		punchButton.disabled = true;
		counterButton.disabled = true;
		playAgain.disabled = false;
	}
}

//The Game >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Takes the moves of the player and generates one for the comp and then runs the damage step
function compMove(id) {
	var move = Math.floor((Math.random()*4)+1);
	if (move <= 3) {
		savedCompMove =  "attack";
	} else {
		savedCompMove = 'counter';
	};
	res = ('Your move is <span>'+ id + '</span> and the computers move is <span>' + savedCompMove + '</span> on round ' + totRounds);
	damageStep(id, savedCompMove);
	roundResults(res);

}

//proccesses the moves
function damageStep(y, c) {
	if ( y === "attack" && c === "attack") {
		res = 'Both players took damage';
		if (compHealth >= 10 && yourHealth >= 10) {
			compHealth -= 10;
			yourHealth -= 10;
		} else {
			compHealth = 0;
			yourHealth = 0;
		}
	} else if ( y === 'counter' && c === 'counter') {
		res = 'Defensive stances taken in vain';
	} else if ( y === "attack" && c === 'counter') {
		res = 'Comp took a defensive stance and prepares to counter';
		counter(y, c);
	} else if ( y === 'counter' && c === "attack") {
		res = 'You took a defensive stance and prepare to counter';
		counter(y, c);
	}
}


window.onload=enableButtons();