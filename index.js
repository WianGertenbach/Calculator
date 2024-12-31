const calculator = {
    add: function(x,y) {
        const result = checkType(x,y);
        return (result.x+result.y).toFixed(2);
    },

    subtract: function(x,y) {
        const result = checkType(x,y);
        return (result.x-result.y).toFixed(2);
        //return arr.reduce((sum, current) => sum-current);
      },

      multiply: function(x,y) {
        const result = checkType(x,y);
        return (result.x*result.y).toFixed(2);
        //return arr.reduce((sum, current) => sum*current,1);
    },

    divide: function(x,y) {
        const result = checkType(x,y);
        if (result.y === 0){
            return 'Error: Division by zero';
        }
        return (result.x/result.y).toFixed(2);
        //return arr.reduce((sum, current) => sum/current,1);
    }
};



function math(x,y,operator) {
    return operator(x,y);
}

let userInput1 = '';
let temp = '';
let currentOperator;

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
    resultScreen.innerHTML = '';
    if (temp === ''){
        temp = '0';
        currentOperator = calculator.add;
    }
    result = math(temp,userInput1,currentOperator);
    userInput1 = result;

    const resultDisplay = document.createElement('p');
    resultDisplay.textContent = result;
    resultScreen.appendChild(resultDisplay);
});

const clearAll = document.querySelector('.clear');
const screen = document.querySelector('.screen');

clearAll.addEventListener('click', ()=> {
    resultScreen.innerHTML = '';
    operationScreen.innerHTML = '';
    userInput1 = '';
    temp = '';
    result = '';
})

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

