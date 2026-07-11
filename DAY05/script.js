/*Task #1: Generate a Pyramid Pattern using Nested Loop as it is shown below:

*
* *
* * *
* * * *
* * * * *

*/

let pyramidPiece = '*';

for(let i=1; i <= 5; i++){

    for(let j=1; j <= 1; j++){
        console.log(pyramidPiece);
        pyramidPiece += ' *';
    }
};

/*Task #2: Create Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
*/

for(let i=1; i <= 10; i++){
    
    for(let j=1; j<= 1; j++){
        let N = 3
        let answer = N * i;
        console.log(`${N} x ${i} = ${answer}`);
    }

};

/*Task #3: Find the summation of all odd numbers between 1 to 500 
and print them on the console log.
*/
for(let i = 1; i <= 500; i++){
    if(i % 2 != 0){
        console.log(i);
    }
};

/*Task #4: Skipping Multiples of 3.
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/
for(let i = 1; i <= 20; i++){
    if(i % 3 != 0){
        console.log(i);
    };
};

/*Task #5: Reverse Digits of a Number (Using while loop).
Write a program to reverse the digits of a given number using a while loop. Example:
Input: 6789
Output: 9876
*/

let input = String(1234567890123); //used only for condition
let newString = input; //holds mutable numbers
let output = "";
let i = 1;

while(i <= input.length){
    output += newString[newString.length -1]; //add last number to output
    newString = newString.slice(0, -1); //remove last number from newString
    i++;
};
console.log(Number(output));

/*Task #6:
Write your understanding on the differences between for, while, and do-while loop. 
Create their flow charts.
*/

/*for loop - Set a condition first and within the loop,
execute a block of code until condition is satisfied.
Best for when you know in advance how many times you need to run the loop.
*/ 

/*while loop - While a codition is true, run the block of code whithin the while loop.
Best for when you don't know iterations in advance. 
*/

/*do-while loop - Guaranteed to run the block of code at least once. 
Condition is checked after code is ran. 
*/