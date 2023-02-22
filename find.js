const numbers = [ 1, 564, 87, 67, 45, 87, 2564, 125];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fivesAll);
console.log(fives);


const products = [
    {id: 1, name:'laptop', price: 45000},
    {id: 2, name:'mobile', price: 80000},
    {id: 3, name:'watch', price: 35000},
    {id: 4, name: 'camera', price: 23000},
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);