let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
function rollDie() {
    let diceRoll = Math.ceil(Math.random()*6) // Math.ceil() in conjuction with Math.random()*6 to generate a number between (inclusive) min: 1 and max: 6 for die faces.
    return diceRoll
}

function rollDice() {
    let randomDieOne = rollDie() // Call created function rollDie().
    let randomDieTwo = rollDie()
    let sumOfDice = randomDieOne + randomDieTwo // Sum of the two generated dice rolls from rollDie(). 
    return sumOfDice
}

let rollButton = document.getElementById("roll") // Access "roll"/"Roll a Pair of Dice" button in HTML.
let resultDiv = document.getElementById("result") // Access "result" div in HTML.
let graphDiv = document.getElementById("graph") // Access "graph" div in HTML.

for (let index = 2; index < results.length; index += 1) {
    let newDiv = document.createElement("div") // Create a div for each dice roll possibility. 
    newDiv.setAttribute("id", `div${index}`) // Give created div an "id" to access later in created function "renderGraph()". 
    graphDiv.append(newDiv) // Append created div to "graph" div.
}

function renderGraph() {
    for (let index = 2; index < results.length; index += 1) {
        let diceOutcome = results[index] // Access the number of times a dice outcome was rolled.
        let diceIndex = document.getElementById(`div${index}`) // Access the created div for a particular dice roll outcome.
        diceIndex.innerHTML = `You rolled a ${index}: ${diceOutcome} times!` // Input a string to the created div for a particular dice roll outcome.
    }
}

function callBack () {
    let userDiceRoll = rollDice() // Call created function rollDice().
    results[userDiceRoll] += 1 // Increment by one the "results" array with the specific outcome of the dice roll.
    resultDiv.innerHTML = `You Rolled a ${userDiceRoll}!` // Input a string to the "result" div.
}

rollButton.addEventListener("click", callBack) // When "roll"/"Roll a Pair of Dice" button is clicked run created "callback()" function.
rollButton.addEventListener("click", renderGraph) // Also, when "roll"/"Roll a Pair of Dice" button is clicked run created "renderGraph()" function.

let roll1000Button = document.getElementById("roll1000") // Access "roll1000"/"Roll 1000 Pair of Dice" button in HTML.

function callBack2 () {
    for (let index = 0; index < 1000; index += 1) { // Created loop to roll a pair of dice 1000 times.
        let user1000DiceRoll = rollDice() // Call created function rollDice().
        results[user1000DiceRoll] += 1 // Increment by one the "results" array with the specific outcome of the dice roll.
        resultDiv.innerHTML = `You Rolled 1000 times!` // Input a string to the "result" div.
    }
}

roll1000Button.addEventListener("click", callBack2) // When "roll1000"/"Roll 1000 Pair of Dice" button is clicked run created "callBack2()" function.
roll1000Button.addEventListener("click", renderGraph) //  When "roll1000"/"Roll 1000 Pair of Dice" button is clicked run created "renderGraph()" function.
