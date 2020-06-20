// A person's obesity level, through BMI

const name = 'Xande'
const weight = 80
const height = 1.73
const sex = 'Masculino'

// Calculating BMI weight / height ^ 2

const imc = weight / height ** 2
let message = ''

if (imc >= 30) {
    message = `Your IMC is: ${imc.toFixed(2)} ${name}, are you overweight`
} else {
    message = `Your IMC is: ${imc.toFixed(2)} ${name}, you aren't overweight`
}
console.log(message)


