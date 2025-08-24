let num1;
let num2;
let operation;

let currentExp = document.querySelector(".current-exp");
let clearButton = document.querySelector(".clear-button");



function clear(){
    currentExp.textContent = "";

}

clearButton.addEventListener("click", clear);

