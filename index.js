//To generate a Random Number 
let computerGuess;
let userGuess = []; //Empty array

const init = () => {
    computerGuess = Math.floor(Math.random() * 100); //We are using *100 to get a number b/w 1-100 and math floor to remove the decimal value after *100
    console.log(computerGuess);
};

// init();  We will call this function onload so go to index file 