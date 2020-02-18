
var names = ["Muhtar", "Madina", "Holy Erhan", "Mihrabana"];
console.log(names);
console.log(names[1]);
console.log(names[3]);
console.log(names[5]); // ==> gives undefined

var nums = [5,1,8,2,9,4,6];
nums.sort();
console.log(nums);

var nums2 = [1,2];
nums2.push(4); //==> adds new value
console.log(nums2);

nums2.pop();  //==> LIFO
console.log(nums2);

/*
pop() ==> LIFO
shift() ==> FIFO
*/
var nums3 = [5,6,7,8];
var num = nums3.pop();  //==> it removes the last value of the array and stores in it
console.log(num); //--> 8
console.log(nums3); //--> 5,6,7

var num2 = nums3.shift();//==> it removes the first value of the array and stores in it
console.log(num2); //--> 5
console.log(nums3); //--> 6,7

var arr1 = [9,10,11];
arr1.unshift(8); //==> adds the value to the first element (index 0)
console.log(arr1); //--> 8,9,10,11

console.log(arr1.length);


