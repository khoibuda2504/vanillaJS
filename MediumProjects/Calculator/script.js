"use strict";
let currentNumber = 0;
let result = 0;
let operator = "";
let flag = 0;
let setCurrentNumber = function(num) {
    currentNumber = num;
}
let setResult = function(num) {
    result = num;
}
 
 
let setOperator = function(Op) {
    operator = Op;
    flag = 1;
}
// Named Function
var add = function(a, b) {
    return a + b;
};
var minus = function(a, b) {
    return a - b;
};
var multiply = function(a, b) {
    return a * b;
};
var divide = function(a, b) {
    return a / b;
};
var modulus = function(a, b) {
    return a % b;
};
let printToScreen = function(content) {
    let screen = document.getElementById("result")
    screen.value = content;
}
let getValueFromScreen = function()
{
    let screen = document.getElementById("result");
    return screen.value;
}
let numberButton = document.querySelectorAll('.number');
numberButton.forEach(function (button) {
    button.addEventListener('click', function() {
        numberInput(button);
    });
});
let numberInput = function(btn)
{
    let value = btn.innerHTML;
    let currentScreen = getValueFromScreen();
  
    if (flag === 1) {
        currentScreen = "0";
        flag = 0;
    }
 
 
    // when screen is zero
   
    if (currentScreen === "0") {  
        if (value === "."){
            printToScreen(currentScreen+value);
        } else {
            printToScreen(value);
        }
    }
    // when screen is not zero
    else {
        if (value === ".") {
            if (currentScreen.indexOf(".") === -1) {
                printToScreen(currentScreen+value);
            } else {
                // khong lam  gi ca
            }
        }
        else  {
            printToScreen(currentScreen+value);
        }
    }
};
let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(function (oppbutton) {
    oppbutton.addEventListener('click', function() {
        operatorInput(oppbutton);
    });
});
let operatorInput = function(btn) {
    let operator = btn.innerHTML;
    let currentScreen = getValueFromScreen();
    switch (operator) {
        case "+":
            setResult(Number(currentScreen));
            setOperator("+");
            setCurrentNumber(Number(currentScreen));
            break;
        case "-":
            setResult(Number(currentScreen));
            setOperator("-");
            setCurrentNumber(Number(currentScreen));
            break;
        case "*":
            setResult(Number(currentScreen));
            setOperator("*");
            setCurrentNumber(Number(currentScreen));
            break;
        case "/":
            setResult(Number(currentScreen));
            setOperator("/");
            setCurrentNumber(Number(currentScreen));
            break;
        case "%":
            setResult(Number(currentScreen));
            setOperator("%");
            setCurrentNumber(Number(currentScreen));
            break;
        case "+/-":
            currentScreen = 0 - Number(currentScreen);
            printToScreen(currentScreen);
            break;
        case "=":
            if (flag === 0) {
                setCurrentNumber(Number(currentScreen));
            }
            calculate();
            flag = 1;
            break;
    }
}
let calculate = function() {
    switch (operator) {
        case "+":
             setResult(add(result * 10,currentNumber *10)/10);
             printToScreen(result);
            break;
         case "-":
             setResult(minus(result,currentNumber));
             printToScreen(result);
             break;
         case "*":
             setResult(multiply(result,currentNumber));
             printToScreen(result);
             break;
         case "/":
             if(currentNumber === 0){
                 printToScreen(`ERROR 404`)
                 break;
             }
             setResult(divide(result,currentNumber));
             printToScreen(result);
             break;
         case "%":
             setResult(modulus(result,currentNumber));
             printToScreen(result);
             break;
    }
}
let buttonClear = document.getElementById('clearAll');
buttonClear.addEventListener('click', function(){
    clearAll();
});
let clearAll = function() {
    printToScreen ("0");
    setCurrentNumber(0);
    setResult(0);
    setOperator("");
}
