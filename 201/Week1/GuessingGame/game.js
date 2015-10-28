var amountOfCorrectAnswers = 0;
var indexOfWrongAnswers = [];
var indexOfRightAnswers = [];
var incorrectAnswerArray = ["You got question #1 wrong, I like to backpack",
							"You got question #2 wrong, I like to run",
							"You got question #3 wrong, I like to cook"];
var correctAnswerArray = ["You answered question 1 correctly, I do enjoy backpacking", 
						  	"You answered question 2 correctly, I do enjoy running",
						  	"You answered question 3 correctly, I do enjoy cooking"]

confirm("Welcome to the Guessing Game.  Are you ready to play?");

/*
Add in error correction

What if your user enters 'Y' instead of 'yes'? Or 'y' or 'YES'? Does your game still
work correctly? It shouldn't. We need to build in some error correction. In your 'if'
statements, where you are testing the user response, you need to add in && cases to your
condition, such that Y/y/YES/yes or N/n/NO/no are all accounted for. Once this is working,
and you have systematically tested all four possibilities on each question, add-commit-push.
*/

/*I am prompting my user for a YES or NO answer to each of the next three questions.
If the answer is correct, I increment the variable storing the correct number of answers
and I am loggng the index of the correct answer for use later.  If the answer is wrong,
I am saving the index number of the wrong answer. */
var firstQuestionResponse= prompt("Do you think I like to backpack?").toUpperCase();
	if(firstQuestionResponse === "YES" || firstQuestionResponse === "Y" ){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(0);
		alert(correctAnswerArray[0]);
	} else  {
		indexOfWrongAnswers.push(0);
		alert(incorrectAnswerArray[0]);
	}
	
var secondQuestionResponse= prompt("Do you think I like to run?").toUpperCase();
	if(secondQuestionResponse === "YES" || secondQuestionResponse === "Y"){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(1);
		alert(correctAnswerArray[1]);
	} else {
		indexOfWrongAnswers.push(1);
		alert(incorrectAnswerArray[1]);
	} 

var thirdQuestionResponse= prompt("Do you think I like to cook?").toUpperCase();
	if(thirdQuestionResponse === "YES"  || thirdQuestionResponse === "Y"){
		amountOfCorrectAnswers += 1;
		indexOfRightAnswers.push(2);
		alert(correctAnswerArray[2]);
	} else {
		indexOfWrongAnswers.push(2);
		alert(incorrectAnswerArray[2]);
	} 
//debugging to make sure push command is working
console.log("This is how many wrong answers were added: " + indexOfWrongAnswers.length);
//debugging to make sure correct answers are being recorded
console.log("This is how many correct answers were added: " + amountOfCorrectAnswers);
			
alert("You got " + amountOfCorrectAnswers + " of 3 answers correct");
	if (indexOfWrongAnswers.length === 0) {
		alert("Congratulations, you got all the answers correct");}
		

