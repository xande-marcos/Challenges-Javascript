//Users and technologies
const users = [
    {
        name: "Carlos",
        technologies: [
            "HTML",
            "CSS"
        ]
    },
    {
        name: "Jasmine",
        technologies: [
            "JavaScript",
            "CSS"
        ]
    },
    {
        name: "Tuane",
        technologies: [
            "HTML",
            "Node.js"
        ]
    }
]

for (let user of users) {
    console.log(`User ${user.name} Work with: ${user.technologies.join(`, `)}`)
}
