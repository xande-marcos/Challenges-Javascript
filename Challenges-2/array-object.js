//Training arrays with objects
const users = {
    name: 'Alexandre',
    age: 18,
    tecnologies: [
        {
            name: 'C++',
            specialty: 'Desktop'
        },
        {
            name: 'Python',
            specialty: 'Data Science'
        },
        {
            name: 'Javascript',
            specialty: 'Web/Mobile'
        }
    ]
}


console.log(`The user ${users.name} has ${users.age} years old and use tecnology ${users.tecnologies[0].name} with especiality on ${users.tecnologies[0].specialty}`)