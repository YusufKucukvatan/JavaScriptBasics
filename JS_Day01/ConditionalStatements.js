/*
if statement: 100% same with java
ternary: 100% same with java
switch statement: 85% same with java
*/
if(9 > 10){
    console.log("Hello");
} else if( 11> 12){
    console.log("NiHao");
}else{
    console.log("Hola");
}
var  str = (9 > 10) ? "Hello" : ( 11> 12) ? "NiHao" : "Hola";
console.log(str);
// boolean, decimals, long java deos not accept in switch statement
var bool = 5.5;
switch(bool){   // accepts any data type
   case true:
        console.log("true");
        break;
    case 5.5: 
        console.log("False");
        break;
    default:
        console.log("Maybe");
}

var num = 10;
if(num<9){
    console.log(num + " is less than 9");
}else{
    console.log(num+" is greater than 9");
}

var str = "Muhtar";
if(str.startsWith("J")){
    console.log(str+" starts with J");
}else if(str.startsWith("M")){
    console.log(str+" starts with M");
}else{
    console.log(str+" starts with something else");
}

var num = 8.5;
switch(num){
    case 6.5:
        console.log("number is 6.5");
        break;
    case 5.5:
        console.log("number is 5.5");
        break;
    case 8.5:
        console.log("number is 8.5");
        break;
    case 7.5:
        console.log("number is 7.5");
        break;
    default:
        console.log("number is unknown");
}

// In java ==> switch statement doesn't work with boolean, double, float and long. But it works in JS.

