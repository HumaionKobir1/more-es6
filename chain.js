// ????????


const users = [ {id: 1, name: 'kobir', job: 'web developer'}];
console.log(users[0].name);


const data = {
    count: 5000,
    data: [
        {id: 1, name: 'sakil', job: 'lab assistent'},
        {id: 2, name: 'tanvir', job: 'junior assistent'}
    ]
}

console.log(data.data[0].id);
console.log(data.data[1].id);

const firstJob = data.data[0].job;
const secondJob = data.data[1].job;
console.log(firstJob, secondJob);



const user = {
    id: 5001,
    name: 'Humaion Kobir',
    address: {
        street: {
            location: '35/A gazipur',
            thana: 'Gazipur sador',
            city: 'Dhaka'
        },
        postOffice: 'rajibur',
        clg: 'Bhowal collgae'
        
    }
}

const userFloor = user.addres?.street.location;
console.log(userFloor);

