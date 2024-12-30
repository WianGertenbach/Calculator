const add = function(x,y) {
    return x+y;
    //return arr.reduce((sum, current) => sum+current,0);
};

const subtract = function(x,y) {
    return x-y;
    //return arr.reduce((sum, current) => sum-current);
  };

const multiply = function(x,y) {
    return x*y;
    //return arr.reduce((sum, current) => sum*current,1);
};

const divide = function(x,y) {
    return x/y;
    //return arr.reduce((sum, current) => sum/current,1);
};

const numButtonClicked = document.querySelectorAll('.num');
const operatorButtonClicked = document.querySelectorAll('.operator');
const screenOperation = document.querySelector('.operation');
const screenResult = document.querySelector('.result');
let firstVal = '';
let secondVal = '';

numButtonClicked.forEach((button) => {
    button.addEventListener('click', () =>{
        const num = document.createElement('p');
        num.textContent = button.textContent;
        screenOperation.appendChild(num);
        firstVal += button.textContent;
    })
})

operatorButtonClicked.forEach((button) => {
    button.addEventListener('click', () =>{
        const operator = document.createElement('p');
        operator.textContent = button.textContent;
        screenOperation.appendChild(operator);
    })
})