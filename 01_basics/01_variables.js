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

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);