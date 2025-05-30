const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(stringList) {
  let maxlength = 0
  let maxindex
  for (i = 0; i < stringList.length; i++) {
    let avenger = stringList[i]
    if (avenger.length > maxlength) {
      maxlength = avenger.length
      maxindex = i
    }
  }
  return console.log(stringList[maxindex], maxlength)
}
findLongestWord(avengers)
