function checkType(x,y){

    let intX;
    let intY; 
    if (typeof x !== 'number' ||typeof y !== 'number'){
        intX = parseInt(x);
        intY = parseInt(y);
    } else {
        intX = x;
        intY = y;
    }

    return {
        x: intX,
        y: intY,
    }
}

const add = function(x,y) {
    const result = checkType(x,y);
    return result.x+result.y;
    //return arr.reduce((sum, current) => sum+current,0);
};

const subtract = function(x,y) {
    const result = checkType(x,y);
    return result.x-result.y;
    //return arr.reduce((sum, current) => sum-current);
  };

const multiply = function(x,y) {
    const result = checkType(x,y);
    return result.x*result.y;
    //return arr.reduce((sum, current) => sum*current,1);
};

const divide = function(x,y) {
    const result = checkType(x,y);
    if (result.y === 0){
        return 'Error: Division by zero';
    }
    return result.x/result.y;
    //return arr.reduce((sum, current) => sum/current,1);
};

function operate(x,y,operator) {
    return operator(x,y);
}

let userInput1 = '';
let temp = '';
let userInput2 = '';

const digits = document.querySelectorAll(".num");
const operationScreen = document.querySelector('.operation');
const resultScreen = document.querySelector('.result');
const operator = document.querySelectorAll('.operator');

digits.forEach(button => {
    button.addEventListener('click', ()=> {
        const number = document.createElement('p');
        number.textContent = button.textContent;
        operationScreen.appendChild(number);
        userInput1 += button.textContent; 
    });
});


operator.forEach(button => {
    button.addEventListener('click', ()=> {
        temp = userInput1;
        userInput1 = ''; 
        currentOperation = add;  
    })
});


