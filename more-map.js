const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
const thirds = numbers.map(x => x / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Berday', 'Tom Solaiman'];
const fristLetters = friends.map(friend => friend[0]);
// console.log(fristLetters);

const nameLength = friends.map(friend => friend.length);
console.log(nameLength);

const products = [
    {id: 1, name:'laptop', price: 45000},
    {id: 2, name:'mobile', price: 80000},
    {id: 3, name:'watch', price: 35000},
    {id: 4, name: 'camera', price: 23000},
]
// const items = products.map(product => console.log(product));

const items = products.map(product => product.name);
const price = products.map(p => p.price);
console.log(price);