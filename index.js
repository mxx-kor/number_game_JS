const setNumber = document.querySelector("#set-number input");
const guessNumber = document.querySelector("#user-number input");
const submitNumber = document.querySelector("#user-number");
const context = document.querySelector("#context");
const winOrLose = document.querySelector("#winorlose");
const HIDDEN_CLASSNAME = "hidden";

function handleGame(event) {
    event.preventDefault();
    const guessedNumber = parseInt(guessNumber.value, 10);
    const randomNumber = Math.ceil(Math.random() * setNumber.value);
    context.innerText = `You chose: ${guessedNumber}, the machine chose: ${randomNumber}.`
    context.classList.remove(HIDDEN_CLASSNAME);
    
    if(guessedNumber === randomNumber){
        winOrLose.innerText = "You won!";
        winOrLose.classList.remove(HIDDEN_CLASSNAME);
    } else{
        winOrLose.innerText = "You lost!";
        winOrLose.classList.remove(HIDDEN_CLASSNAME);
    };
}

submitNumber.addEventListener("submit" , handleGame);
