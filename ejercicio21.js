const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
let mayorEdad = []
let menorEdad = []
for (const user of users) {
  if (user['years'] >= 18) {
    mayorEdad.push(user['name'])
  } else {
    menorEdad.push(user['name'])
  }
}
console.log('Usuarios menores de edad: ' + menorEdad)
console.log('Usuarios mayores de edad: ' + mayorEdad)
