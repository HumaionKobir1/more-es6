// problem-1: You have an odd array (array with od numbers.) [1, 3, 5, 7, 9]. Now convert htis array into an even array (arrat with even number). [2, 4, 6, 8, 10]. Do this using for loop  & array.map() method. Hints: add one to any odd number and it will become an even number.
const fiveTimes = [1, 2, 3, 4, 5].map(x => x + 1);
console.log(fiveTimes);


// problem-2: You are given an array say: [33, 54, 50, 78, 74, 50, 101, 30]. Now return/get all the elements which are divisiable by 10 using array.filter() method.
const number1 = [ 33, 50, 48, 75, 69, 50]
const result = number1.filter(num => num % 10 === 0);
console.log(result);


// problem-3: Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3;
const number2 = [ 33, 50, 48, 75, 69, 50]
const result1 = number3.find(num => num % 10 === 0);
console.log(result1);