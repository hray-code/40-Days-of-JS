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

/*Task #3: Find the summation of all odd numbers between 1 to 500 and print them on the console log.

*/