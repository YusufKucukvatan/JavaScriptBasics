var numbers = [2, 1, 3, "Jack", 4, 4.5, "Allen", '$', true, 'Z', 'A'];
console.log(numbers);

console.log(numbers[0]);
console.log(numbers[5]);

numbers.sort();
console.log(numbers);

var nums2 = [1,2];
nums2.push(4); //==> adds new value [1,2,4]
console.log(nums2);

nums2.pop();  //==> LIFO  [1,2]
console.log(nums2);

/*
pop() ==> LIFO
shift() ==> FIFO
unshift(shfited value before) ==> it adds previously removed value by shift()
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
