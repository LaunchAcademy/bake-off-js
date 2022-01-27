### Getting Started

From your `challenges` folder in the terminal, type the following commands:

```no-highlight
et get bake-off-js
cd bake-off-js
code .
```

Running `open index.html` on Mac, `start index.html` on Windows, or using your folder navigation and opening `index.html` manually should trigger your default browser to open, render the text in the html file, and run the code found in `main.js`.

In the browser, open up the JavaScript console. You can refresh the page in order to see your changes.

If you've never seen [The Great British Bake Off](https://www.buzzfeed.com/marietelling/23-reasons-why-you-should-watch-the-great-british-bake-off?utm_term=.nvkV7lM40#.tdd70reNJ), you should stop punishing yourself right now and go watch it on Netflix. Known for it's great bakes and double-entendres, the show is full of wonderful food and people alike. Each week the contestants are asked to each bake a signature bake that ascribes to a specific theme. Cakes for week 1, Biscuits (the British cookie type) for week 2, and Bread for week 3.

Here's an array of the bakers:

```JavaScript
let bakers = [
  "Chetna",
  "Diana",
  "Iain",
  "Kate",
  "Luis",
  "Martha",
  "Nancy",
  "Norman",
  "Richard"
];
```

And here is a list of their bakes:

```JavaScript
let signatureBakes = [
  ["Cardamom, Pistachio and Coffee Swiss Roll", "Fenugreek and Carom Crackers", "Onion and Pine Nut Rolls"],
  ["Mum's Sunday Tea Lemon Curd Swiss Roll", "Parmesan Triangles", "Rustic Picnic Rolls"],
  ["Raspberry and Lemon Swiss Roll", "Za'atar and Fig Biscuits", "Cranberry and Walnut Rye Bread Rolls"],
  ["Apricot and Basil Swiss Roll", "Parmesan and Apple Biscuits", "Orange and Cardamom Rye Bread Knot"],
  ["Red Velvet and White Chocolate Swiss Roll", "Black Olive and Rosemary Biscuits", "Opposites Attract Rolls"],
  ["Spanish Swiss Roll", "Caramelised Onion and Goat's Cheese Sandwich Biscuits", "Date and Walnut Rye Rolls"],
  ["Tiramisu Swiss Roll", "Fennel and Rye Thins", "Cider and Walnut Crusty Rolls"],
  ["Coffee and Hazelnut Swiss Roll", "Farthing Biscuits", "Rye Bread Rolls"],
  ["Pistachio and Strawberry Swiss Roll", "Rosemary Seeded Crackers", "Rye and Cranberry Rolls"]
];
```

As we can see, `signatureBakes` is a nested array data structure. Each inner array is a list of what the baker with the corresponding array index baked. So for example, in the `bakers` array Chetna is located at index `0`. If we look at the array in `signatureBakes` that is at the `0` index, we can see that she baked the Cardamom, Pistachio and Coffee Swiss Roll, the Fenugreek and Carom Crackers, and the Onion and Pine Nut Rolls.

The index of the bake corresponds to the week it was baked. So for example for week 1 Chetna baked Cardamom, Pistachio and Coffee Swiss Roll, which is at the `0` index of her array of bakes.

**To answer the questions below you will need to create functions that take arguments.** You should not hard code anything. Make sure your formatting matches the examples.

1. Is there a contestant named Martha? What about a contestant named Tony? Create a function called `doTheyExist` that returns a message that tells if they were in the contest or not.

Sample Outputs:

```
Yes Martha is a contestant
No Tony is not a contestant
```

2. We have a new baker who wants to join our competition! Tony wants to jump in. Add Tony's name to the bakers array and add an array of his 3 bakes to the signatureBakes array. Create a function named `addABaker` which should take 2 arguments, a name and an array with 3 bakes. Once added to the original arrays, return Tony's new index. Remember not to hardcode Tony's name.

3. Norman doesn't agree that Tony should be allowed to enter late and now wants to leave the competition. Create a function named `removeBaker` that takes in a name as an argument and if that person exists, remove that person from the bakers array and the signatureBakes array and return true. If the person doesn't exist, return false.

4. The winner of week 2 baked Rosemary Seeded Crackers. Who was the winner? Create a function called `theBaker` that takes the name of a bake as an argument and returns the name of the person who baked it.

5. What did Nancy bake in week 1? What about Richard in week 3? Create a function called `nameThatBake` that takes 2 arguments, the first argument being the number of the week of the bake, and the second argument being the name of the baker. It should return the item baked.

Sample Output:

```
In week 1 Nancy baked Tiramisu Swiss Roll
In week 3 Richard baked Rye and Cranberry Rolls
```

6. What did everyone bake in week 1? What about week 3? Create a function called `printWeek` that takes 1 argument, the week of the contest, and returns a formatted list of all dishes for that week.

Sample Output:

```
Week 1 dishes:

Chetna baked a Cardamom, Pistachio and Coffee Swiss Roll
Diana baked a Mum's Sunday Tea Lemon Curd Swiss Roll
Iain baked a Raspberry and Lemon Swiss Roll
...
```

7. What about if we wanted a weekly summary of what Nancy cooked? What about Iain? Create a function named `printBaker` that takes in the name of the baker and returns a formatted list of all the Baker's dishes.

Sample Output:

```
Nancy's Summary:

Tiramisu Swiss Roll
Fennel and Rye Thins
Cider and Walnut Crusty Rolls
```

8. Executives of the show are lazy and just want one report recapping what happened in the competition. Create a function named `printSummary` with no arguments. It should return a formatted message that includes a summary for each week.

Tip:

```
Could we use existing functionality to help with this?
```

Sample Output:

```
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

```

9. How many bakes include the word Lemon in the title? What are their names and who baked them? What about bakes with Rosemary in the title? Remember it's possible it could be lower cased in the title. Create a function called `bakesWith` that takes 1 argument, the word you want to check for in the titles of the bakes. It should return a summary of all related bakes.

Sample Output:

```
There are 2 bakes with the word Lemon in the title:

Diana baked the Mum's Sunday Tea Lemon Curd Swiss Roll
Iain baked the Raspberry and Lemon Swiss Roll
```

10. That last function did two things, it counted the number of bakes that include the ingredient, and it made a list of what they were. Let's refactor this by creating a helper function to handle finding the bakes. Create a function called `findBakes` that takes in one argument, the ingredient to search for. It should return an array with only the related bakes that include the ingredient in the title.

11. Now it's time to refactor our original `bakesWith` function. Create a new function named `bakesWith2` that has all the same functionality as the original, but uses the `findBakes` function to handle all finding the related bakes. It is okay to copy, rename, and refactor the existing `bakesWith` function.

12. If Martha and George do exist, what did they bake in week 3? For this question you'll want to update your `nameThatBake` function. Create a function named `nameThatBake2` that takes in the week and name as arguments. Output the bake for that baker if they exist, otherwise return a message saying they were not in the competition.

Tip:

```
Don't use `doTheyExist` because the current functionality doesn't return a true/false
```

Sample Output:

```
In week 3 Martha baked Date and Walnut Rye Rolls.
George was not in the competition and baked nothing.
```
