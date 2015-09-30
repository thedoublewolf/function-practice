// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in JavaScript.
// ---------------------

function max(number1, number2){
    var number1 = 25;
    var number2 = 75;
    	if (number1 > number2)
    		return number1;
    	else 
    		return number2;
}

max();

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(number1, number2, number3){
    var number1 = 25;
    var number2 = 50;
    var number3 = 75;
        if ((number1 > number2) && (number1 > number3))
        	return number1;
        else if ((number2 > number1) && (number2 > number3))
        	return number2;
        else if ((number3 > number1) && (number3 > number2))
        	return number3;
}

maxOfThree();

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
   var char = "z";
       if ((char) === ("a") || (char) === ("e") || (char) === ("i") || (char) === ("o") || (char) === ("u"))
       	return true;
       else 
       	return false;
}

isVowel();

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var phrase = "rovarspraket";
    var phraseSplit = phrase.split('');
    var translateSplit = phraseSplit.map(function(consonant){
        if ((consonant) === ("b") || (consonant) === ("c") || (consonant) === ("d") || (consonant) === ("f") ||
            (consonant) === ("g") || (consonant) === ("h") || (consonant) === ("j") || (consonant) === ("k") ||
            (consonant) === ("l") || (consonant) === ("m") || (consonant) === ("n") || (consonant) === ("p") ||
            (consonant) === ("q") || (consonant) === ("r") || (consonant) === ("s") || (consonant) === ("t") ||
            (consonant) === ("v") || (consonant) === ("x") || (consonant) === ("z"))
            return consonant = consonant + "0" + consonant;
        else
            return consonant;
    });
    var translate = translateSplit.join('');
    return translate;
}

rovarspraket();

// ---------------------
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    var string = "This sentence is reversed!";
    return string.split('').reverse().join('');
}

reverse();

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...reduce
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...filter
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}