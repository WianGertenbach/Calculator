const calculator = {
    add: function(x,y) {
        const result = checkType(x,y);
        return (result.x+result.y).toFixed(2);
    },

    subtract: function(x,y) {
        const result = checkType(x,y);
        return (result.x-result.y).toFixed(2);
      },

      multiply: function(x,y) {
        const result = checkType(x,y);
        return (result.x*result.y).toFixed(2);
    },

    divide: function(x,y) {
        const result = checkType(x,y);
        if (result.y === 0){
            return 'Error: Division by zero';
        }
        return (result.x/result.y).toFixed(2);
    },

    pow: function(x,y){
        const result = checkType(x,y);
        return Math.pow(result.x,result.y).toFixed(2);
    },

    perc: function(x){
        const result = checkType(x);
        return (result.x/100).toFixed(2);
    },

    factorial: function(x){
        const result = checkType(x);
        if (result.x === 0){
            return 1;
          } else {
            let factorialArr = [];
            for (let i = 1; i <= result.x; i++){
              factorialArr.push(i);
            }
            return factorialArr.reduce((total, current) => total*current, 1).toFixed(2);
          }
    }
};


let userInput1 = '';
let temp = '';
let currentOperator;
let result = '0';


const digits = document.querySelectorAll(".num");
const operationScreen = document.querySelector('.operation');
const resultScreen = document.querySelector('.result');

const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');



digits.forEach(button => {
    button.addEventListener('click', ()=> {

        const number = document.createElement('p');
        number.textContent = button.textContent;
        operationScreen.appendChild(number);

        userInput1 += button.textContent;
        console.log("UserInput1 = "+userInput1);
    });
});


operator.forEach(button => {
    button.addEventListener('click', ()=> {
        const allClasses = [...button.classList];
        const desiredClassName = allClasses[1];

        const symbol = document.createElement('p');
        symbol.textContent = button.textContent;
        operationScreen.appendChild(symbol);

        temp = userInput1;
        userInput1 = '';

        currentOperator = calculator[desiredClassName];
    })
});

equals.addEventListener('click', ()=> {
    const resultDisplay = document.createElement('p');
    resultScreen.innerHTML = '';

    if (currentOperator === undefined && userInput1 === ''){
        clearCalc();
        console.log("No user input or operator");
        resultDisplay.textContent = "Input a value";
        resultScreen.appendChild(resultDisplay);
        return;
    } 
    if (temp === ''){
        console.log("temp yes");
        temp = '0';
        currentOperator = calculator.add;
    } 

    result = math(temp,userInput1,currentOperator);
    userInput1 = result;

    resultDisplay.textContent = result;
    resultScreen.appendChild(resultDisplay);
    

});

const clearAll = document.querySelector('.clear');
const screen = document.querySelector('.screen');

clearAll.addEventListener('click', ()=> {
    clearCalc();

});

const deleteBtn = document.querySelector('.delete');

deleteBtn.addEventListener('click', () => {
    userInput1 = '';
    operationScreen.innerHTML = '';
});


function clearCalc(){
    resultScreen.innerHTML = '';
    operationScreen.innerHTML = '';
    userInput1 = '';
    temp = '';
    result = '';
    currentOperator = undefined;
}

function math(x,y,operator) {
    return operator(x,y);
};

function checkType(x,y){

    let intX;
    let intY; 
    if (typeof x !== 'number' || typeof y !== 'number'){
        intX = parseFloat(x);
        intY = parseFloat(y);
    } else {
        intX = x;
        intY = y;
    }

    return {
        x: intX,
        y: intY,
    };
};

