//  There are two categories of datatypes Primitive and reference type Non Primitive based on memory allocation
// Primitive
// 7 types : (Call by Value) changes are done in the copy of them
/* String, Number, Boolean, null, undefined, Symbol(to make something unique), BigInt
*/
// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null (typeof outsideTemp will give object)
// let userEmail;

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id == anotherid);


// Reference type (Non Primitive) = values jinka reference directly memory mei allocate kiya jaata hai
// Array, Objects, Functions
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value 
// they hold at runtime and can change throughout the program as we assign different values to them.

const heros = ["SHAKTIMAAN", "NAAGRAJ", "DOGA"]
let MyObj = {
    name: "Udita",
    age: 19,
}
// values in curly braces are object type and can be
// function can be treated as variable in javascript
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heros); // output object
console.log(typeof myFunction); // output function
