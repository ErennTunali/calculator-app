let num1;
let num2;
let operation;

let firstNumEntered = false;
let secondNumEntered = false;
let operationEntered = false;
let prevOperation;



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
let subtractionButton = document.querySelector(".subtraction-button");
let multButton = document.querySelector(".mult-button");
let divisionButton = document.querySelector(".division-button");



function clear(){
    currentExp.textContent = "";
    num1 = null;
    num2 = null;
    operationEntered = false;

}

function typeNum(event){
    currentExp.textContent += event.target.textContent;
}

function lastIsOperation(string){
    let endings = ["+" ,"-", "x" ,"/"];
    for (let ending of endings){
        if (string.endsWith(ending)){
            return true;
        }
    }
    return false;


}


function enterOperation(event){

    if (currentExp.textContent !== ""){

        operation = event.target.textContent;

        if (!operationEntered){
            currentExp.textContent += operation;
            operationEntered = true;
        }
        else{
            if (lastIsOperation(currentExp.textContent)){
                currentExp.textContent = currentExp.textContent.slice(0, -1) + operation;
                /* prevOperation = operation; */
            }
            else{

            
                let parts = currentExp.textContent.split(prevOperation)
                num1 = Number(parts[0]);
                num2 = Number(parts[1]);
                let result = calculate(prevOperation, num1, num2);
                currentExp.textContent = result + operation;
            }

        }
        prevOperation = operation;
        
       

        
        
        
        
        
        



    }


}

function calculate(operation, num1, num2){
    

    if (operation === "+"){
        return num1 + num2;
    }
    else if (operation === "-"){
        return num1 - num2;
    }
    else if (operation === "x"){
        return num1 * num2;
    }
    else if (operation === "/"){
        return num1 / num2;
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
subtractionButton.addEventListener("click", enterOperation);
multButton.addEventListener("click", enterOperation);
divisionButton.addEventListener("click", enterOperation);
