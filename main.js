let num1;
let num2;
let operation;

let firstNumEntered = false;
let secondNumEntered = false;
let operationEntered = false;



let currentExp = document.querySelector(".current-exp");
let clearButton = document.querySelector(".clear-button");
let oneButton = document.querySelector(".one-button");
let twoButton = document.querySelector(".two-button");
let threeButton = document.querySelector(".three-button");
let fourButton = document.querySelector(".four-button");
let fiveButton = document.querySelector(".five-button");
let sixButton = document.querySelector(".six-button");
let sevenButton = document.querySelector(".seven-button");
let eightButton = document.querySelector(".eight-button");
let nineButton = document.querySelector(".nine-button");
let zeroButton = document.querySelector(".zero-button");

let additionButton = document.querySelector(".addition-button");



function clear(){
    currentExp.textContent = "";

}

function typeNum(event){
    currentExp.textContent += event.target.textContent;
}

function enterOperation(event){
    if (!firstNumEntered){
        num1 = Number(currentExp.textContent);
        firstNumEntered = true;
        operation = event.target.textContent;
    }
    else if(!secondNumEntered){
        numPart = currentExp.textContent.split(operation)[1];
        num2 = Number(numPart);
        secondNumEntered = true;
        let result = evaluate(operation, num1, num2);
        currentExp.textContent = result;
        operation = event.target.textContent;
        currentExp.textContentd += operation;



    }

}

function evaluate(operation, num1, num2){
    if (operation === "+"){
        return num1 + num2;
    }

}





clearButton.addEventListener("click", clear);
oneButton.addEventListener("click", typeNum)
twoButton.addEventListener("click", typeNum)
threeButton.addEventListener("click", typeNum)
fourButton.addEventListener("click", typeNum)
fiveButton.addEventListener("click", typeNum)
sixButton.addEventListener("click", typeNum)
sevenButton.addEventListener("click", typeNum)
eightButton.addEventListener("click", typeNum)
nineButton.addEventListener("click", typeNum)
zeroButton.addEventListener("click", typeNum)

additionButton.addEventListener("click", enterOperation);