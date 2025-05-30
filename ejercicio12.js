const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  const nonDuplicates = []
  for (let i = 0; i < list.length; i++) {
    if (!nonDuplicates.includes(list[i])) {
      nonDuplicates.push(list[i])
    }
  }
  return console.log(nonDuplicates)
}
removeDuplicates(duplicates)
