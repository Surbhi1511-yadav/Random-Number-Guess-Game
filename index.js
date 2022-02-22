//To generate a Random Number 
let computerGuess;
let userGuess = []; //Empty array

const init = () => {
    computerGuess = Math.floor(Math.random() * 100); //We are using *100 to get a number b/w 1-100 and math floor to remove the decimal value after *100
    // console.log(computerGuess);

    //To remove the New Gmae button 
    document.getElementById("nameGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};

// init();  We will call this function onload so go to index file 

//When we Go to the startGame screen the welcome screen must be hidden and the gamearea should be visible
const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display="block";
}
const easyMode = () => {
    //MaxGuess in EasyMode should be 10
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    //MaxGuess in hardMode should be 5
    maxGuess = 5;
    startGame();
};