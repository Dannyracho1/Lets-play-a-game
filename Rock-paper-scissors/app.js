
// define variables

let userScore = 0;
let compScore = 0;

let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function win(varUser) {
	console.log("You Won!");
	userScore_span.innerHTML++;
	result_p.innerHTML = "Gewinner! 🔥";
	const user_div = document.getElementById(varUser);
	user_div.classList.add('green-glow');
	setTimeout( () => { user_div.classList.remove('green-glow')},800);
}

function lose(varUser) {
	console.log("You Lost!");
	compScore_span.innerHTML++;
	result_p.innerHTML = "Versager.. 💩";
	const user_div = document.getElementById(varUser);
	user_div.classList.add('red-glow');
	setTimeout( () => { user_div.classList.remove('red-glow')},800);
}

function tie(varUser) {
	console.log("It's A Tie!");
	result_p.innerHTML = "Unentschieden.";
	const user_div = document.getElementById(varUser);
	user_div.classList.add('gray-glow');
	setTimeout( () => { user_div.classList.remove('gray-glow')},800);
}

function play(varUser) {
	const choices = ["r", "p", "s"];
	var x = Math.floor((Math.random() * 3));

	switch (varUser + choices[x]){
		case "rr":
		case "pp":
		case "ss":
		tie(varUser);
		break;
		case "rs":
		case "pr":
		case "sp":
		win(varUser);
		break;
		case "rp":
		case "ps":
		case "sr":
		lose(varUser);
		break;
	}
}


rock_div.addEventListener('click',function(){
	play("r");
});

paper_div.addEventListener('click',function(){
	play("p");
});

scissors_div.addEventListener('click',function(){
	play("s");
});



