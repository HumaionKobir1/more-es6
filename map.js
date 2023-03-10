const numbers =[ 2, 3, 8, 4, 6, 7];
// const output = [];
// for(const number of numbers){
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);

function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = dubleItOld(number);
        output.push(doubled);
    }
    return output;
}

function dubleItOld(number){
    return number * 2;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
/*
Purpose:
1. Get an array 
2. for every elements of the array do something
3. store the result in an array
4. Return the result array
*/
const result = getDoubles(numbers);
console.log(result);
