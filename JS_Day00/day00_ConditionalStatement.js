/*
if()
*/

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

