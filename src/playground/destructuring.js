// const person = {
//     name: 'Milly',
//     age: 40,
//     location: {
//         city: 'Nordhorn',
//         temp: 5
//     }
// }
// const {name, age } = person;
// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }


// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvaria', '1947'];

// const [street,city,state,zip ]= address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)','$2.00', '$2.50', '$2.75'];

const [itemName,,medium] = item;

console.log(`A medium ${itemName} cost ${medium}`);
