/*Task #1 - Odd or Even:
1. Take a number and find if the number is an odd or even number.
2. Print the number and result in the console.*/

const randomNumber = Math.floor(Math.random() * 100); 

console.log(randomNumber);
console.log(randomNumber % 2 === 0 ? "Even number." : "Odd Number.");

/*Task #2 - Do you have a Driving License:
Let's check if you are eligible to get a driving license. 
The eligibility to get a driving licence is 18 years.

 1. Manage age as a variable.
 2. Check if the age is elligible for a driving license and print it on the console accordingly.
*/

let age = 18;

console.log(age >= 18 ? "You are eligible." : "You are not eligible.")

/*Task #3 - Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

 1. You get 12,300 rupees as your monthly salary.
 2. You get a 20% bonus on your annual salary.
 3. How much money do you make per year as a CTC?
*/

let baseSalary = 12300 * 12;
let bonusPercentage = 0.2;
let annualSalary = baseSalary * bonusPercentage;
let currency = ' Rupees';

console.log(annualSalary.toLocaleString() + currency);

/*Task #4 - Write a program for the Traffic Light Simulation:
Red Light... Green Light... Let's Play!

 1. Create a color variable.
 2. Based on the color variable's value print in the console if a traveller needs to STOP or GO. 
 3. The Red color is for STOP and the Green color is for GO.
*/

let color = 'red';

console.log(color === 'red' ? "STOP" : "GO");

/*Task #5 - Create an Electricity Bill Calculator 
Let's calculate how much you pay for electricity bills per month and annually.

 1. Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 2. If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 3. If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/

let units = 5;
let unitPrice = 2;
let monthlyConsumption = (units * unitPrice) * 30;
let annualPayment = (monthlyConsumption * 12) * 0.2;

console.log("You spend " + monthlyConsumption + " Ruppes per month.")
console.log("You spend " + annualPayment + " Rupees per year with a 20% discount.")

/*Task #6 - Leap Year Checker
Is 2025 a Leap Year?

 1. Take year as input.
 2. Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
*/ 

const year = prompt("Enter a year: ");

console.log((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? `${year} is a leap year.` : `${year} is not leap year.`);

/*Task #7 - Max of Three Numbers
Find the max number from the lot.

 1. Take three numbers and assign them to variables p, q, and r.
 2. Now find the maximum of these three numbers using the comparison operators.
*/

let p = 1;
let q = 2;
let r = 3;

console.log((p > q && p > r) ? `${p} is the max number.` 
            : (q > p && q > r) ? `${q} is the max number.` 
            : (r > p && r > q) ? `${r} is the max number.` 
            : 'error.');

/*Task #8 - Bitwise Doubling

 1. Create a variable count and assign a value, say, 5.
 2. Now use the Bitwise shift operator to make the number double.
 3. Print it on the console.
*/

let number = 20;

console.log(number << 1);