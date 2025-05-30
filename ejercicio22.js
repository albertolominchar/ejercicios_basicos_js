const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
onlyVeganFood = []
for (const food of foodSchedule) {
  if (food['isVegan'] === true) {
    onlyVeganFood.push(food['name'])
  }
}
for (let j = 0; j < fruits.length; j++) {
  if (!onlyVeganFood.includes(fruits[j])) {
    onlyVeganFood.push(fruits[j])
  }
}
console.log(onlyVeganFood)
