function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return console.log(numberOne)
  } else if (numberTwo > numberOne) {
    return console.log(numberTwo)
  } else {
    return console.log('Son iguales')
  }
}

let mayor = greaterNumber(10, 3)
console.log(mayor)
