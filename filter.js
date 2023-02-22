const numbers = [ 1, 564, 87, 67, 45, 87, 2564, 125];
const bigNums = numbers.filter(number => number > 100);
console.log(bigNums);


const tiny = numbers.filter( n => n < 100);
console.log(tiny);


const even = numbers.filter(num => num % 2 === 0);
console.log(even);


const products = [
    {id: 1, name:'laptop', price: 45000},
    {id: 2, name:'mobile', price: 80000},
    {id: 3, name:'watch', price: 35000},
    {id: 4, name: 'camera', price: 23000},
];

const expensive = products.filter(product => product.price > 10000);
console.log(expensive);