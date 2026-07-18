/*Task #1: Write a Function to Convert Celsius to Fahrenheit.

Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. 
Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/

function celsiusToFahrenheit(celsius) {
    let toFahrenheit = (celsius * 9/5) + 32;
    console.log(`${toFahrenheit} Fahrenheit`);
};

celsiusToFahrenheit(100);

/*Task #2: Create a Function to Find the Maximum of Two Numbers.

Write a function findMax(num1, num2) that returns the larger of the two numbers. 
It should work for negative numbers as well.
*/

function findMax(num1, num2) {
    if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
};

findMax(-4,-2);

/*Task #3: Function to Check if a String is a Palindrome.

Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). 
You can not use any string function that we have not learned in the series so far.
*/


function isPalindrome(str) {

    let storeString = str;
    let strBackwards = "";

    for(i = 0; i <= str.length-1; i++){
        strBackwards += storeString.at(-1);
        storeString = storeString.slice(0,-1);
    }    
    console.log(strBackwards);
    
    if(strBackwards === str){
        console.log("This word is a palindrome");
    }else{
        console.log("No palindrome")
    }
}

isPalindrome("racecar");

/*Task #4: Write a function to Count Vowels in a String.
Write a function countVowels(str) that counts the number of vowels 
(a, e, i, o, u) in a given string.
*/
function countVowel(input) {

    let nonVowel = "";
    let vowel = "";
        for(i = 0; i <= input.length-1; i++){
            if(input[i].includes("a")){
                vowel += input[i];
            }else if(input[i].includes("e")){
                vowel += input[i];
            }else if(input[i].includes("i")){
                vowel += input[i];
            }else if(input[i].includes("o")){
                vowel += input[i];
            }else if(input[i].includes("u")){
                vowel += input[i];
            }else{
                nonVowel += input[i];
            }
        }
    
    let vowelCount = vowel.length;
    console.log(`${input} has ${vowelCount} vowels.`);
};

countVowel("hello");
