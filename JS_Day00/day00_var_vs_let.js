var str1 = "Hello";
var str1 = "World";
console.log(str1);

let str2 = "Hello";
//let str2 = "World"; ==> let does not give permit to use the same variable name more than one...
console.log(str2);

if(true){
    let num1 = 100;
}
//console.log(num1); ==> we cannot use a local variable out of the local block

if(true){
    var num2 = 100;
}
console.log(num2); //==> But var permits to use a local variable out of the local block

const password = 1234;
console.log(password);

// password = 5678; constant variables cannot be reassigned again just like java...
console.log(password);