//To generate a Random Number 
let computerGuess;
let userGuess = []; //Empty array
let audio = new Audio('./audio2.wav');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100); //We are using *100 to get a number b/w 1-100 and math floor to remove the decimal value after *100
    // console.log(computerGuess);

    //To remove the New Gmae button 
    document.getElementById("nameGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

// init();  We will call this function onload so go to index file 

//When we Go to the startGame screen the welcome screen must be hidden and the gamearea should be visible
const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}
//Reload the page (New Game)
const newGameBegin = () =>{
    window.location.reload();
}


// start new game
const startNewGame = () => {
    audio.play();
    document.getElementById("nameGameButton").style.display = "inline";
    document.getElementById("inputBox").disabled = "true";
}

//main logic of your app : 
const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber]; //userGuess for previous entered number and userNumber for recent entered number
    document.getElementById("guesses").innerHTML = userGuess;

    // Check the value low or high 
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            document.getElementById('textOutput').innerHTML = "Your guess is High &#128550";
            document.getElementById('inputBox').value = "";
        } else if (userNumber < computerGuess) {
            document.getElementById('textOutput').innerHTML = "Your guess is Low &#128532";
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = "It's Correct &#128512";
            document.getElementById('inputBox').value = "";
            startNewGame();
        }
    }
    //For last attempt 
    else {
        if (userNumber > computerGuess) {
            document.getElementById('textOutput').innerHTML = `You Loose !!! Correct Number was ${computerGuess}`;
            document.getElementById('inputBox').value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            document.getElementById('textOutput').innerHTML = `You Loose !!! Correct Number was ${computerGuess}`;
            document.getElementById('inputBox').value = "";
            startNewGame();
        } else {
            document.getElementById('textOutput').innerHTML = "It's Correct &#128512";
            document.getElementById('inputBox').value = "";
            startNewGame();
        }
    }
    //To tooglee the attempts 
    document.getElementById('attempts').innerHTML = userGuess.length;
};


const easyMode = () => {
    audio.play();
    //MaxGuess in EasyMode should be 10
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();
    //MaxGuess in hardMode should be 5
    maxGuess = 5;
    startGame();
};