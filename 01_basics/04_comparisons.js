// console.log(2>1);
// output in boolean value
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// console.log("2">1);
// console.log("02">1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= work differently 
//  Comparison convert null to a number , treating it as 0.
//  === strict check checks value and datatype

console.log("2" === 2);
console.log("2" == 2);