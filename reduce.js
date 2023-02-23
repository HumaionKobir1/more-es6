const numbers = [1, 2, 3, 4, 5, 8];
// .reduce (accumulator Function, initital value);
// accumulator function use tow parameters
// const total = numbers.reduce((previous, current) => previous + current, 0);
console.log()

const total = numbers.reduce((previous, current) => {
    return previous + current
}, 0);