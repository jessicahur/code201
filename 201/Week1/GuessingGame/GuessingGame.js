var amountOfCorrectAnswers = 0;
var indexOfWrongAnswers = [];
var indexOfRightAnswers = [];
var finalResponsesToUser = ["You got question #1 wrong, I like to backpack",
							"You got question #2 wrong, I like to run",
							"You got question #3 wrong, I like to cook"];
var correctAnswerArray = ["You answered question 1 correctly, I do enjoy backpacking", 
						  	"You answered question 2 correctly, I do enjoy running",
						  	"You answered question 3 correctly, I do enjoy cooking"]

confirm("Welcome to the Guessing Game.  Are you ready to play?");

/*I am prompting my user for a YES or NO answer to each of the next three questions.
If the answer is correct, I increment the variable storing the correct number of answers
and I am loggng the index of the correct answer for use later.  If the answer is wrong,
I am saving the index number of the wrong answer. */
var firstQuestionResponse= prompt("Do you think I like to backpack?").toUpperCase();
	if(firstQuestionResponse === "YES"){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(0);
	} else  {
		indexOfWrongAnswers.push(0);
	}
	
var secondQuestionResponse= prompt("Do you think I like to run?").toUpperCase();
	if(secondQuestionResponse === "YES"){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(1);
	} else {
		indexOfWrongAnswers.push(1);
	} 

var thirdQuestionResponse= prompt("Do you think I like to cook?").toUpperCase();
	if(thirdQuestionResponse === "YES"){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(2);
	} else {
		indexOfWrongAnswers.push(2);
	} 
//debugging to make sure push command is working
console.log("This is how many wrong answers were added: " + indexOfWrongAnswers.length);
//debugging to make sure correct answers are being recorded
console.log("This is how many correct answers were added: " + amountOfCorrectAnswers);
			
/* Below we are evaluating the answer/response we are going to provide to the player.
We start by telling them how many answers they got correct and the total number of questions.
If the user has answered all the questions correctly, we tell them so.  Otherwise we 
are telling the player how many answers were right, how many were wrong and what 
the right answers are for each question.
*/
alert("You got " + amountOfCorrectAnswers + " of 3 answers correct");
	if (indexOfWrongAnswers.length === 0) {
		alert("Congratulations, you got all the answers correct");
		for(i = 0; i < indexOfRightAnswers.length; i++ ) {
			var rightAnswer = indexOfRightAnswers[i];
			alert(correctAnswerArray[rightAnswer]);
		}
	} else {
		for(i = 0; i < indexOfWrongAnswers.length; i++ ) {
			var wrongAnswer = indexOfWrongAnswers[i];
			alert(finalResponsesToUser[wrongAnswer]);
		}
		for(i = 0; i < indexOfRightAnswers.length; i++ ) {
			var rightAnswer = indexOfRightAnswers[i];
			alert(correctAnswerArray[rightAnswer]);
		}
		
	}

