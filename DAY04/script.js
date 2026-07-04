//Task #1: What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

/*Output will be "It's a normal day."
Values are case sensitive in switch-case statements.*/

/*Task #2: Build an ATM Cash Withdrawal System.
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. 
The ATM only allows multiples of 100. 
Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
*/

let withdrawalAmount =  200;

console.log((Number.isInteger(withdrawalAmount / 100)) ? "Withdrawal Successful." : "Invalid amount.");

/*Task #3: Build a Calculator with switch-case 
Write a simple calculator that takes an operator (+, -, , /, %) as input, 
and performs the operation on two numbers. Print the output on the console.
*/

let operator = '+';
let number1 = 10;
let number2 = 20;

switch (operator) {

    case "+" : console.log(number1 + number2);
        break;
    
    case "-" : console.log(number1 - number2);
        break;

    case "*" : console.log(number1 * number2);
        break;

    case "/" : console.log(number1 / number2);
        break;

    case "%" : console.log(number1 % number2);
        break;

    default : console.log("Please enter a valid operator and number.");
};

/*Task #4: Pay for your movie ticket. 
Imagine, the INOX charges ticket prices based on age:

- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.
*/

let customerAge = 60;

if(customerAge > 0 && customerAge < 18) {
    console.log("Your movie ticket is $3.");
}else if(customerAge >= 18 && customerAge <= 60){
    console.log("Your movie ticket price is $10.");
}else if(customerAge > 60 && customerAge <= 105){
    console.log("Your movie ticket price is $8.");
}else{
    console.log("Please enter a valid number.");
};

/*Task #5: Horoscope Sign Checker.
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. 
Make it month bases, not date based. 
Like March and April borns are Aries, April and May born are Taurus, and so on. Do not use if-else.
*/

let birthMonth = "July";

switch (birthMonth) {
    case "January" : console.log("You are either a Capricorn or Aquarius.");
    break;

    case "February" : console.log("You are either an Aquarius or Pisces.");
    break;

    case "March" : console.log("You are either a Pisces or Aries.");
    break;

    case "April" : console.log("You are either an Aries or Taurus.");
    break;

    case "May" : console.log("You are either a Taurus or Gemini.");
    break;
    
    case "June" : console.log("You are either a Gemini or Cancer.");
    break;
    
    case "July" : console.log("You are either a Cancer or Leo.");
    break;

    case "August" : console.log("You are either a Leo or Virgo.");
    break;

    case "September" : console.log("You are either a Virgo or Libra.");
    break;

    case "October" : console.log("You are either a Libra or Scorpio.");
    break;

    case "November" : console.log("You are either a Scorpio or Sagittarius.");
    break;

    case "December" : console.log("You are either a Sagittarius or Capricorn.");
    break;

    default : console.log("Please enter a valid month.");
};

/*Task #6: Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

- All sides equal is called, Equilateral Triangle.
- Two sides equal is called, Isosceles Triangle.
- All sides different is called, Scalene Triangle.

Take the sides of a triangle as input and write a program to determine the triangle type. 
Change the inputs everytime manually to see if the output changes correctly.
*/

let sidesEqual = "all";

switch (sidesEqual) {
    case "all" : console.log("Equilateral Triangle.");
    break;

    case "none" : console.log("Scalene Triangle.");
    break;

    case "two" : console.log("Isosceles Triangle.");
    break;

    default : console.log("Invalid Input. Enter: all, none, or two");
};