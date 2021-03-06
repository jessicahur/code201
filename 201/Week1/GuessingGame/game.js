var userName;
var amountOfCorrectAnswers = 0;
var indexOfWrongAnswers = [];
var indexOfRightAnswers = [];
var incorrectAnswerArray = ["You got question #1 wrong, I like to backpack",
							"You got question #2 wrong, I like to run",
							"You got question #3 wrong, I like to cook"];
var correctAnswerArray = ["You answered question 1 correctly, I do enjoy backpacking <img src='../img/jscript.jpeg'>",
						  	"You answered question 2 correctly, I do enjoy running <img src='../img/jscript.jpeg'>",
						  	"You answered question 3 correctly, I do enjoy cooking <img src='../img/jscript.jpeg'>"]

confirm("Welcome to the Guessing Game.  Are you ready to play?");

var userName = prompt('Please type in your first name and then click "OK"');

/*I am collecting the players input/answers to questions.  I am using that  information to
be able to tell the user what questions they got right and what questions they got wrong. For
the wrong answers, I provide them the correct answer.  */
question1();
question2();
question3();
function question1(){
var firstQuestionResponse= prompt("Do you think I like to backpack? Type Yes or No").toUpperCase();
	if(firstQuestionResponse === "YES" || firstQuestionResponse === "Y" ){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(0);
		var msg1 = document.getElementById("q1");
		msg1.innerHTML = correctAnswerArray[0];
		msg1.className = "right";
		//alert(correctAnswerArray[0]);
	} else  {
		indexOfWrongAnswers.push(0);
		var msg1 = document.getElementById('q1');
		msg1.innerHTML = incorrectAnswerArray[0];
		msg1.className = "wrong";
		//alert(incorrectAnswerArray[0]);
	}
}

function question2(){
var secondQuestionResponse= prompt("Do you think I like to run? Type Yes or No").toUpperCase();
	if(secondQuestionResponse === "YES" || secondQuestionResponse === "Y"){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(1);
		var msg2 = document.getElementById('q2');
		msg2.innerHTML=correctAnswerArray[1];
		msg2.className = "right";
		//alert(correctAnswerArray[1]);
	} else {
		indexOfWrongAnswers.push(1);
		var msg2 = document.getElementById('q2');
		msg2.innerHTML=incorrectAnswerArray[1];
		msg2.className = "wrong";
		//alert(incorrectAnswerArray[1]);
	}
}

function question3(){
var thirdQuestionResponse= prompt("Do you think I like to cook? Type Yes or No").toUpperCase();
	if(thirdQuestionResponse === "YES"  || thirdQuestionResponse === "Y"){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(2);
		var msg3 = document.getElementById('q3');
		msg3.innerHTML = correctAnswerArray[2];
		msg3.className = "right";
		//alert(correctAnswerArray[2]);
	} else {
		indexOfWrongAnswers.push(2);
		var msg3 = document.getElementById('q3');
		msg3.innerHTML = incorrectAnswerArray[2];
		msg3.className = "wrong";
		//alert(incorrectAnswerArray[2]);
	}
}
//debugging to make sure push command is working
console.log("This is how many wrong answers were added: " + indexOfWrongAnswers.length);
//debugging to make sure correct answers are being recorded
console.log("This is how many correct answers were added: " + amountOfCorrectAnswers);
//I did not have to enter the summary because I did it on day 1

//I am telling the player how many of the total number of questions they got right
alert(userName + ", you got " + amountOfCorrectAnswers + " of 3 answers correct.  Thanks for playing");
	if (indexOfWrongAnswers.length === 0) {
		alert("Congratulations, you got all the answers correct. You get extra credit");}


