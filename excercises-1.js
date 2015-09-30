///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(parameter1, parameter2){
	var parameter1 = 25;
	var parameter2 = 75;
	return parameter1 + parameter2;
}

sum();

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(parameter1, parameter2, parameter3){
	var parameter1 = 25;
	var parameter2 = 50;
	var parameter3 = 89;
	var sum = parameter1 + parameter2 + parameter3;
	return Number(sum) / 3;
}

avg();

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(parameter){
	var parameter = "This is a string";
	return parameter.length;
}

getLength();

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(parameter1, parameter2){
	var parameter1 = 25;
	var parameter2 = 75;
		if (parameter1 > parameter2)
			return 'true';
		else 
			return 'false';
}

greaterThan();

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(parameter){
	var parameter = "Jonny";
	return "Hello, " + parameter + "!";
}

greet();

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(parameter1, parameter2, parameter3, parameter4){
	var parameter1 = "Madlib";
	var parameter2 = "mad";
	var parameter3 = "beats";
	var parameter4 = "for real";
	return parameter1 + " makes " + parameter2 + " stupid " + parameter3 + " " + parameter4 + ", yo!";
}

madlib();

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

var letters = ["a", "b", "c"];

letters.reduce(function(finalString, currentLetter) {
	finalString = finalString + currentLetter;
	return finalString;
});

// returns "abc"





