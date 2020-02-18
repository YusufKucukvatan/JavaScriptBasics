/*
for loop: 
while loop:
do while loop:
for in loop: syntax is very similar to for each loop however functionality is different. it prints only index numbers of the collection.
for of loop: behaves just like for each loop in java
for(var each of collectionName){
}
}
*/

var str = "Hello";
for (var i =0; i < 3; i++) {
    console.log("Hello");
}

for (var i =0; i < str.length; i++) {
    console.log(str.charAt(i));
}

var i=0;
while(i<str.length){
    console.log(str.charAt(i));
    i++;
}

i=str.length-1;
do{
console.log(str.charAt(i));
i--;
}while(i>=0)

var nums = [5,4,3,2];
for (each in nums) {
    console.log(each); //==> it prints only index numbers
}

var nums = [5,4,3,2];
for (each in nums) {
    console.log(nums[each]); //==> it prints all elements one by one
}

for(var each of nums){
    console.log(each); //==> it prints all elements one by one. Works like for each
}

