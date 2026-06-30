//Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language
let name = "haley"
const age = 21;
const isStudent = false;
const favoriteProgramLang = 'Javascript';

//Task 2: Print the values to the console.
console.log(name, age, isStudent, favoriteProgramLang);

//Task 3: Try reassigning values to let and const variables and observe errors.
let name = 'audrey' 
console.log(name); //"Uncaught SyntaxError: Identifier 'name' has already been declared

age = 33;
console.log(age); // "Uncaught TypeError: Assignment to constant variable"

//Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

//-- Object
let student = {
    name: 'Alice',
    age: '21',
    isStudent: true,
    favoriteProgramLang: 'Javascript',
    classEnrolled: ['Math', 'English Comp 1', 'Biology']
};
console.log(student); //{name: 'Alice', age: '21', isStudent: true, favoriteProgramLang: 'Javascript'}

//-- Array
let classes = ['Social Studies', 'Algebra', 'Trigonometry', 'Biology', 'English Comp 1'];
console.log(classes); // (5)['Social Studies', 'Algebra', 'Trigonometry', 'Biology', 'English Comp 1']
console.log(classes[0]); //Social Studies