
// Fetch data from db
database.ref().on("value" ,(snapshot) => { 
    const person = snapshot.val();
    console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`);
}, (e) => {
    console.log('Error fetching data', e);
});
setTimeout(() => {
    database.ref('job/company').set('Google');
},3000);

setTimeout(() => {
    database.ref('age').set(40);
},3500);

setTimeout(() => {
    database.ref().off();
},7500);

database.ref()
    .once('value')
    .then((snapshot)=>{
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e)=>{
        console.log('Error fetching data', e);
    })

// Set data in db
database.ref().set({
    name: 'Milly Berst',
    age: 40,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    isSingle: false,
    location:{
        city: "nordhorn",
        country: "United States"
    }
}).then(() => {
    console.log('Data es saved')
}).catch((e) => {
    console.log('This failed.',e )
});

// Update db
database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});
// Remove item from db
const isSingle = database.ref('isSingle');
isSingle.remove()
    .then(()=>{
        console.log("Remove succeeded.")
    })
    .catch((error)=>{
        console.log("Remove failed: " + error.message)
    });


//child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child change 

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//Fetch data and convert in an array
database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses =[];
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
        console.log(expenses);
    });

//Fetch data, convert in an array, wait for changes
database.ref('expenses').on('value', (snapshot)=>{
    const expenses =[];
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    })
    console.log(expenses);
} );

//Add new data in database with autogenerate ID
database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
});


