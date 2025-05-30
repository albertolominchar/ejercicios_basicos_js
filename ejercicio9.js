const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(numberList) {
  let suma = 0
  for (i = 0; i < numberList.length; i++) {
    let number = numberList[i]
    suma += number
  }
  return console.log(suma)
}
sumNumbers(numbers)
