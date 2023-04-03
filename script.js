alert("Welcome to our rock, paper, scissors game!");

let userWin = 0;
let compWin = 0;
let tie = 0;
let playAgain = true;

while (playAgain) {
    game(); // STEP 3 
}

function game() { // STEP 2
    const choices = ["R", "P", "S"];

    const userChoice = prompt("Please pick R, P, or S").toUpperCase();

    if (!choices.includes(userChoice)) {
        alert(userChoice + " is not a valid choice, please try again");
        return;
    }

    console.log(userChoice);
    //use popup window to allow user to pick R,P, or S
    //store result in a variable called userChoice
    //TODO: EDGE CASE: what happens if the user picks another letter?
    //TODO: EDGE CASE: what happens if they use a lowercase letter

    //randomly select computer choice, store in variable
    //possible choices include R, P, or S,
    //store in variable called compChoice


    const compChoice = randNum(choices);

    console.log(compChoice);

    function randNum(arr) {
        let choice = arr[Math.floor(Math.random() * arr.length)];
        return choice;
    }

    function userWins() {
        userWin++;
        console.log(userWin);
        alert("You Won!");
        stats();
    }

    function compWins() {
        compWin++;
        console.log(compWin);
        alert("You Lost!");
        stats();
    }

    function tieMessage() {
        tie++;
        console.log(tie);
        alert("You Tied!");
        stats();
    }

    //display stats
    //track wins, losses and ties
    //display all three in one screen
    function stats() {
        alert("User: " + userWin + "\nComputer: " + compWin + "\nTies: " + tie);
    }

    // when user picks the key, the value is what the computer
    // is required to pick for the user to win.
    const winConditions = {
        "R": "S",
        "S": "P",
        "P": "R",
    };

    if (userChoice == compChoice) {
        tieMessage();
    } else if (winConditions[userChoice] == compChoice) {
        userWins();
    } else {
        compWins();
    }

    // compare user and computer choice
    // display results of game
    // if user = rock and comp = scissors || user = scissors and comp = paper || user = paper and comp = rock, user wins
    // if (userChoice === "R" && compChoice === "S" || userChoice === "S" && compChoice === "P" || userChoice === "P" && compChoice === "R") {
    //     userWins();
    //     // if user = rock and comp = paper || user = scissors and comp = roce || user = paper and comp = scissors, comp wins        
    // } else if (userChoice === "R" && compChoice === "P" || userChoice === "S" && compChoice === "R" || userChoice === "P" && compChoice === "S") {
    //     compWins();
    //     // if user = rock and comp = rock or user = scissors and comp = scissors or user = paper and comp = paper, tie
    // } else {
    //     tieMessage();
    // }
    //ask user if they want to play again
    //if they say yes, restart whole game
    //if they say no, stop doing anything
    playAgain = confirm("Play again?"); // STEP 1
}



