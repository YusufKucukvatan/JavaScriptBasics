/*
concat()
toLowerCase()
toUpperCase()
trim()
indexOf()
substring()
startsWith()
ensWith()
charAt()
length
*/

var str = "    Cybertek";
str = str.concat(" School")

console.log(str);
str = str.trim();
console.log(str);

console.log(str.startsWith('C'));
console.log(str.startsWith('K'));

console.log(str.substring(2,5));
console.log(str.charAt(2));
console.log(str.indexOf('e'));