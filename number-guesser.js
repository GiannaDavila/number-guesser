/* 
create a program that guesses a number from 1 to 10 
then ask us to ask us to guess that number.
if its higher say "too high" and ask again.
if its loweer say "too low" and ask again.
if its the right number say "congradulations" and exit
*/

import readline from "readline-sync"

let userGuessedRight = false

// while (true){
// guess a number from 1-10
let NumberChosen = Math.ceil(Math.random() * 10)
// console.log(NumberChosen)
while (!userGuessedRight) {
    let guess = readline.question("what is your guess?")
    // console.log(guess)
    if (guess == NumberChosen) {
        console.log('congradulations')
        userGuessedRight = true
    }
    else if (guess > NumberChosen) {
        console.log('too high. try again!')

    }
    else if (guess < NumberChosen) {
        console.log('too low!')

    }
    else if (typeof guess != "number") {
        console.log('Not a Number')
    }
}
// while(!userGUessedRight){
// console.log("What is your guess?")

// }