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
    num1 = null;
    num2 = null;

}

function typeNum(event){
    currentExp.textContent += event.target.textContent;
}

function enterOperation(event){

    if (currentExp.textContent !== ""){
        
        operation = event.target.textContent;
        currentExp.textContent += operation;
    
        numPart1 = currentExp.textContent.split(operation)[0];
        num1 = Number(numPart1);
        numPart2 = currentExp.textContent.split(operation)[1];
        if (numPart2 !== ""){
            num2 = Number(numPart2);
            let result = calculate(operation, num1, num2);
            currentExp.textContent = result;
            operation = event.target.textContent;
            currentExp.textContent += operation;
        }
        
        
        
        
        
        



    }

}

function calculate(operation, num1){
    

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