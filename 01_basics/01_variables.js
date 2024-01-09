const accountId = 144553
let accountEmail = "uditasingh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//methods of declaring constants and variables
//accountId = 2 const keyword cannot be changed hence not allowed
//use only const and let for constants and variables
// curly braces are called scopes

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var because of issue in block scope and functional scope
*/
/*
Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function. 
Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);