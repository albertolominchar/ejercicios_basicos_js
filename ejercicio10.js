const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  if (numberList.length === 0) {
    return console.log(0)
  }
  let suma = 0
  for (i = 0; i < numberList.length; i++) {
    number = numberList[i]
    suma += number
  }
  return console.log(suma / numberList.length)
}
average(numbers)
