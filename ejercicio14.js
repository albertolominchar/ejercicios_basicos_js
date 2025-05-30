const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
function repeatCounter(list) {
  const repeatWords = []
  const repeatNum = []
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (!repeatWords.includes(word)) {
      repeatWords.push(word)
      let repeat = 0
      for (let j = 0; j < words.length; j++) {
        if (words[j] === word) {
          repeat++
        }
      }
      repeatNum.push(repeat)
    }
  }
  for (let k = 0; k < repeatWords.length; k++) {
    console.log(`La palabra ${repeatWords[k]} se repite ${repeatNum[k]} veces`)
  }
}
repeatCounter(words)
