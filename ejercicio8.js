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
  for (i = 0; i < avengers.length; i++) {
    let avenger = avengers[i]
    if (avenger.length > maxlength) {
      maxlength = avenger.length
      maxindex = i
    }
  }
  return console.log(avengers[maxindex], maxlength)
}
findLongestWord(avengers)
