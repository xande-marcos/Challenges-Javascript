//Calculate a person's retirement

const name = 'Xande'
const sex = 'M'
const age = 39
const contribution = 24

// Consider the minimum contribution time for men is 35 and for women, 30 years;
// The sum of the age and the contribution time of the man must be at least 95 years old, while the woman must be at least 85 years old in the sum.

const min_age = age + contribution;

if (sex === 'F') {
    if (min_age >= 85 && contribution >= 30) {
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you can't still retire!`)
    }
} else if (sex === 'M') {
    if (min_age >= 95 && contribution >= 35) {
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you can't retire`)
    }
} else {
    console.log('[ERROR] Check your data and try AGAIN!')
}