const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]
let smallFilm = []
let mediumFilm = []
let bigFilm = []
for (const movie of movies) {
  if (movie['durationInMinutes'] < 100) {
    smallFilm.push(movie['name'])
  } else if (movie['durationInMinutes'] >= 200) {
    bigFilm.push(movie['name'])
  } else {
    mediumFilm.push(movie['name'])
  }
}
console.log('Películas pequeñas: ' + smallFilm)
console.log('Películas medianas: ' + mediumFilm)
console.log('Películas grandes: ' + bigFilm)
