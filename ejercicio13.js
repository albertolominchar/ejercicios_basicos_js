const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
let findName = 'Xabier'
function nameFinder(nameList, name) {
  if (nameList.includes(name)) {
    console.log(
      'La lista de nombres, incluye el nombre de ' +
        name +
        ' en la posición ' +
        nameList.indexOf(name) +
        '.'
    )
  } else {
    console.log(
      'El nombre ' + name + ' no está incluido en la lista de nombres.'
    )
  }
  return
}
nameFinder(names, findName)
