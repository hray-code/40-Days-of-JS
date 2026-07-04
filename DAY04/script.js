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
Write a simple calculator that takes an operator (+, -, , /, %) as input, 
and performs the operation on two numbers. Print the output on the console.*/

let depositValue = parseInt([prompt("How much do you want to deposit?")], 10);
let currentBalance = 2000;

if(depositValue){
    currentBalance += depositValue;
    console.log(`Deposit value: $${depositValue}, Current Balance: $${currentBalance}`);
};

