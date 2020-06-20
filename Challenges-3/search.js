//Checks whether the user uses CSS technology
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
    },
    {
        name: "Cicrano",
        technologies: [
            "HTML",
            "JAVASCRIPT",
            "C++",
            "C",
            "CSS",
            "DENO",
            "PYTHON"
        ]
    }
]


function checkUserUsesCSS(user) {
    for (let technology of user.technologies) {
        if (technology == 'CSS') {
            return true
        }
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const userWorkWithCSS = checkUserUsesCSS(users[i])
    if (userWorkWithCSS) {
        console.log(`User ${users[i].name} work with CSS`)
    }
}




