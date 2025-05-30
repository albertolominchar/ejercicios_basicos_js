const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  if (list.length === 0) {
    return console.log(0)
  }
  let suma = 0
  let numList = 0
  for (i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      suma += list[i]
      numList++
    }
  }
  return console.log(suma / numList)
}

averageWord(mixedElements)
