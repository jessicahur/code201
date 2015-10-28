JS Samples

//asking user to confirm with pop-up
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');

//collect input from user with pop-up
prompt("What is your age?");//simple example
var age = prompt("What is your age"); /*the user input for the prompt becomes
the value of the varibale "age" */

//string length
"cake".length

//getting a substring from a string: substring = Now is the time for all
console.log("Now is the time for all good men".substring(0,15));

//using a function that returns a value in a conditional statement
var quarter = function(number) {
 return number/4;   
}

if (quarter(48) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}



//usiing DOM to update page
var el = document.getElementById('greeting');
el.textContent = welcome;

//calling a method to update page leveragin DOM
var msg = 'Sign up to receive our newsletter';//global variable
function updateMessage() {
	var el = document.getElementById('message');//local variable
	el.textContent = msg;
}
updateMessage();


//general named function
function someName(width, heigth) {

	return (width * heigth);
}   //no semi-colon at end of code block



//named function that returns multiple values in an array
function calculateArea(width, heigth, depth) {
	var area = width * heigth;
	var volume = width * heigth * depth;
	var sizes = [area, volume];
	return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var  volumeOne = getSize(3, 2, 3)[1];

var area = function(width, heigth) {
	return width * heigth;
}
var size = area(3,4);


//immediatley invoked function expression (iffy)
var area = (function () {
	var width = 3;
	var heigth = 2;
	return width * heigth;
}() )  //notice the "()"" at the end; that calls the function as it is loaded and interpreted by script engine


//object literal 
var hotel = {
	name: 'Quay',
	rooms: 40,
	booked: 25,
	gym: true,
	roomTypes: ['twin', 'king', 'queen'],
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};

//now assign a different value to one of the properties or keys of the object using member operator
hotel.name = "Hilton";

//add a new property to the object
hotel.floors = 21;

//delete a property (not just the current value) from an object 
delete hotel.floors

//clear the current value of a property in an object using  a blank string
hotel.name = "";


//object constructor
function MemberAccount (firstName, lastName, telephoneNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.telephoneNumber = telephoneNumber;
	this.verifyFirstName = function() {
		return "this is the name we have for you: " + this.firstName;
	};
}
var testMember1 = new MemberAccount("Billy", "Smith", "621 567-4567");
var testMember2 = new MemberAccount("Sally", "Jones", "543 345-9708");


//
function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function () {
		return this.rooms - this.booked;
	}
}
var quayHotel = new Hotel("Quay", 40, 25);

var details1 = quayHotel.name + ' rooms: ' ;
	details += quayHotel.checkAvailability();
var elHotel1 = document.getElementById("hotel1");
elHotel.textContent = details1;

//more object basics (object in an object)
var friends = {
    bill : {
        firstName: "Bill",
        lastName: "Smith",
        number: " 901 754-7635"
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: " 902 754-7635"
    },
    racheal: {
        firstName: "Racheal",
        lastName: "Chai",
        number: " 903 754-7635"
    }
    };

//prints out the  direct properties of friends{} :  bill, steve, racheal
var friends = {
    bill : {
        firstName: "Bill",
        lastName: "Smith",
        number: " 901 754-7635",
        address: ["1234", "1st Ave", "Seattle", "WA"]
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: " 902 754-7635",
        address: ["4567", "3rd St", "Portland", "OR" ]
    },
    racheal: {
        firstName: "Racheal",
        lastName: "Chai",
        number: " 903 754-7635",
        address: ["098765", "Main St", "San Jose", "CA"]
    }
    };
    
    var list = function (friends) {
        for (var x in friends) {
         console.log(x);   
        }
        
    };
 /*   for - in - loop - e x p l a i n e d

With the for-in-loop you have a Method
which will iterate over all properties of a given object.
At each iteration it will assign the property-key as a string
to a variable name of your choice (x is variable).
Thus for (var x in friends) 
will lead to 4 iteration's
iteration-1 var x = "bill";
iteration-2 var x = "steve";
iteration-3 var x = "racheal";
As they want you to display the property-key and NOT it's associated VALUE
you would use
console.log( x );

If they wanted you to display the associated VALUE (ie; Bill instead of bill) of the propery-key you would use
console.log( nyc[x] );


how to do a similar search, that prints out all the key:values for a name that matches:
  
    var search = function(name) {
        for(var key in friends) {
            if(friends[key].firstName === name) {
             console.log(friends[key]);
             return friends[key];
            }
        };
    };
    
    search("bill");
*/





//switch statement
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  
  default:
    console.log("I don't think that's a primary color!");
}

//another switch statement

var msg;
var level =  "four";

switch(level) {

	case "three":
		msg = "good luck";//or some code block
		break;
	case "four":
		msg = "Second Try";
		break;
	default:
		msg= "third try";
		break;
}

var el = document.getElementById("answer");
el.textContent = msg;



document.querySelector();
document.querySelectorAll();

var hotItems = document.querySelectorAll("li.hot");
if(hotItems > 0) {
	for(i = 0; i , hotItems.length;  i++)
		hotItems[i].className = toast;
}

document.getElementById('one').firstChile.nextSibling.nodeValue;




//control flow

var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}