// YOUR CODE HERE
let bakers = [
  "Chetna",
  "Diana",
  "Iain",
  "Kate",
  "Luis",
  "Martha",
  "Nancy",
  "Norman",
  "Richard",
]

let signatureBakes = [
  [
    "Cardamom, Pistachio and Coffee Swiss Roll",
    "Fenugreek and Carom Crackers",
    "Onion and Pine Nut Rolls	",
  ],
  [
    "Mum's Sunday Tea Lemon Curd Swiss Roll",
    "Parmesan Triangles",
    "Rustic Picnic Rolls",
  ],
  [
    "Raspberry and Lemon Swiss Roll",
    "Za'atar and Fig Biscuits",
    "Cranberry and Walnut Rye Bread Rolls",
  ],
  [
    "Apricot and Basil Swiss Roll",
    "Parmesan and Apple Biscuits",
    "Orange and Cardamom Rye Bread Knot",
  ],
  [
    "Red Velvet and White Chocolate Swiss Roll",
    "Black Olive and Rosemary Biscuits",
    "Opposites Attract Rolls",
  ],
  [
    "Spanish Swiss Roll",
    "Caramelised Onion and Goat's Cheese Sandwich Biscuits",
    "Date and Walnut Rye Rolls",
  ],
  [
    "Tiramisu Swiss Roll",
    "Fennel and Rye Thins",
    "Cider and Walnut Crusty Rolls",
  ],
  ["Coffee and Hazelnut Swiss Roll", "Farthing Biscuits", "Rye Bread Rolls"],
  [
    "Pistachio and Strawberry Swiss Roll",
    "Rosemary Seeded Crackers",
    "Rye and Cranberry Rolls",
  ],
]

// 1. Is there a contestant named Martha? What about a contestant named Tony? Create a function called `doTheyExist` that returns a message that tells if they were in the contest or not.
const doTheyExist = (contestant) => {
  if (bakers.includes(contestant)) {
    return `Yes, there is a contestant named ${contestant} `
  } else {
    return `No, there is not a contestant named ${contestant} `
  }
}
console.log(doTheyExist("Martha"))
console.log(doTheyExist("Tony"))

// 2. We have a new baker who wants to join our competition! Tony wants to jump in. Add Tony's name to the bakers array and add an array of his 3 bakes to the signatureBakes array.
const addABaker = (name, bakesArray) => {
  bakers.push(name)
  signatureBakes.push(bakesArray)
  return bakers.indexOf(name)
}

//Create a function named `addABaker` which should take 2 arguments, a name and an array with 3 bakes. Once added to the original arrays, return Tony's new index. Remember not to hardcode Tony's name.

console.log(
  "Tony's index: ",
  addABaker("Tony", ["Awesome Cake", "Snappy Biscuits", "Cheesy Bread"])
)

// 3. Norman doesn't agree that Tony should be allowed to enter late and now wants to leave the competition.

// Create a function named `removeBaker` that takes in a name as an argument and if that person exists, remove that person from the bakers array and the signatureBakes array and return true. If the person doesn't exist, return false.

const removeBaker = (name) => {
  if (bakers.includes(name)) {
    let i = bakers.indexOf(name)
    bakers.splice(i, 1)
    signatureBakes.splice(i, 1)
    return true
  } else {
    return false
  }
}

console.log("Norman is removed: ", removeBaker("Norman"))
console.log("George is removed: ", removeBaker("George"))
//After All Changes
console.log("Bakers", bakers)
console.log("Signature Bakes", signatureBakes)

// 4. The winner of week 2 baked Rosemary Seeded Crackers. Who was the winner?

// Create a function called `theBaker` that takes the name of a bake as an argument and returns the name of the person who baked it.

const theBaker = (bake) => {
  let baker
  signatureBakes.forEach((bakeList, index) => {
    if (bakeList.includes(bake)) {
      baker = bakers[index]
    }
  })
  return baker
}

console.log(theBaker("Rosemary Seeded Crackers"))
console.log(theBaker("Opposites Attract Rolls"))

// 5. What did Nancy bake in week 1 What about Richard in week 3?

// Create a function called `nameThatBake` that takes 2 arguments, the first argument being the number of the week of the bake, and the second argument being the name of the baker. It should return the item baked.

/* Sample Output

  In week 1 Nancy baked Tiramisu Swiss Roll
  In week 3 Richard baked Rye and Cranberry Rolls

*/

const nameThatBake = (weekNum, baker) => {
  let bakerIndex = bakers.indexOf(baker)
  let bakeList = signatureBakes[bakerIndex]
  return bakeList[weekNum - 1]
}

console.log(`In week 1, Nancy baked ${nameThatBake(1, "Nancy")}`)
console.log(`In week 3, Richard baked ${nameThatBake(3, "Richard")}`)

// 6. What did everyone bake in week 1? What about week 3?

// Create a function called `printWeek` that takes 1 argument, the week of the contest, and returns a formatted list of all dishes for that week.

/* Sample Output:

  Week 1 dishes: 

  Chetna baked a Cardamom, Pistachio and Coffee Swiss Roll
  Diana baked a Mum's Sunday Tea Lemon Curd Swiss Roll
  Iain baked a Raspberry and Lemon Swiss Roll
  ...

*/
const printWeek = (weekNum) => {
  let newString = `Week ${weekNum} dishes: \n`
  signatureBakes.forEach((bakeList, index) => {
    newString += `${bakers[index]} baked a ${bakeList[weekNum - 1]} \n`
  })
  return newString
}
console.log(printWeek(1))
console.log(printWeek(3))

// 7. What about if we want a weekly summary of what Nancy cooked? What about Iain?

// Create a function named `printBaker` that takes in the name of the baker and returns a formatted list of all the Baker's dishes.

/* Sample Output:

  Nancy's Summary: 

  Tiramisu Swiss Roll
  Fennel and Rye Thins
  Cider and Walnut Crusty Rolls

*/

console.log(printBaker("Nancy"))
console.log(printBaker("Iain"))

// 8. Now we want a summary of everything that happened during the competition!

// Create a function named `printSummary` with no arguments. It should return a formatted message that includes a summary for each week.

/* Sample Output:

  Competition Summary: 

  Week 1 dishes: 

  Chetna baked a Cardamom, Pistachio and Coffee Swiss Roll
  Diana baked a Mum's Sunday Tea Lemon Curd Swiss Roll
  Iain baked a Raspberry and Lemon Swiss Roll
  ...

  Week 2 dishes:
  
  Chetna baked a Cardamom, Pistachio and Coffee Swiss Roll
  Diana baked a Mum's Sunday Tea Lemon Curd Swiss Roll
  Iain baked a Raspberry and Lemon Swiss Roll
  ...

*/

console.log(printSummary())

// 9. How many bakes include the word Lemon in the title? What are their names and who baked them? What about bakes with Rosemary in the title? Remember it's possible it could be lower cased in the title.

// Create a function called `bakesWith` that takes 1 argument, the word you want to check for in the titles of the bakes. It should return a summary of all related bakes.

/* Sample Output:
There are 2 bakes with the word Lemon in the title: 

Diana baked the Mum's Sunday Tea Lemon Curd Swiss Roll
Iain baked the Raspberry and Lemon Swiss Roll
*/

console.log(bakesWith("Lemon"))
console.log(bakesWith("rosemary"))

// 10. That last function did two things, it counted the number of bakes that include the ingredient, and it made a list of what they were. Let's refactor this by creating a helper function to handle finding the bakes.

// Create a function called `findBakes` that takes in one argument, the ingredient to search for. It should return an array with only the related bakes that include the ingredient in the title.

// 11. Now it's time to refactor our original `bakesWith` function. Create a new function named `bakesWith2` that has all the same functionality as the original, but uses the `findBakes` function to handle finding the related bakes. It is okay to copy, rename, and refactor the existing `bakesWith` function.

console.log(bakesWith2("Lemon"))
console.log(bakesWith2("rosemary"))

// 12.  If Martha and Tony do exist, what did they bake in week 3? For this question you'll want to update your `nameThatBake` function.

// Create a function named `nameThatBake2` that takes in the week and name as arguments. Output the bake for that baker if they exist, otherwise return a message saying they were not in the competition.

// ** Don't use `doTheyExist` because the current functionality doesn't return a true/false

/* Sample Output

  In week 3 Martha baked Date and Walnut Rye Rolls
  Tony was not in the competition and baked nothing.

*/

console.log(nameThatBake2(3, "Martha"))
console.log(nameThatBake2(2, "Tony"))
