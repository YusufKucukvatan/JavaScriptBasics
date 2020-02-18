/*
- there is no access modifier, specifier or return type on JS functions(methods)
- No method overloading on JS. It makes unusable the overloaded method. We have to give another name...
*/
function addNums(num1, num2){
    let result = num1 + num2;
    console.log(result);
}

addNums(10,20);

function addNums2(num1, num2, num3){
    let result = num1 + num2 + num3;
    console.log(result);
}
addNums2(10,20,30);

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}
console.log(multiply(2,3));

function concat(str1, str2){
    return str1+str2;
}
console.log(concat("Cyber","Tek"));