const calculator = {
    add: function(x,y) {
        const result = checkType(x,y);
        return result.x+result.y;
    },

    subtract: function(x,y) {
        const result = checkType(x,y);
        return result.x-result.y;
        //return arr.reduce((sum, current) => sum-current);
      },

      multiply: function(x,y) {
        const result = checkType(x,y);
        return result.x*result.y;
        //return arr.reduce((sum, current) => sum*current,1);
    },

    divide: function(x,y) {
        const result = checkType(x,y);
        if (result.y === 0){
            return 'Error: Division by zero';
        }
        return result.x/result.y;
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
        temp = userInput1;
        console.log("temp = "+temp);
        userInput1 = '';
        console.log("UserInput1 = "+userInput1);
        currentOperator = calculator.multiply;
    })
});

equals.addEventListener('click', ()=> {
    result = math(temp,userInput1,currentOperator);
    console.log(`Result: temp (${temp}) x userInput1 (${userInput1}) = ${result}))`);
    userInput1 = result;
    console.log("UserInput1 = "+userInput1);
    const resultDisplay = document.createElement('p');
    resultDisplay.textContent = result;
    resultScreen.appendChild(resultDisplay);

})

function checkType(x,y){

    let intX;
    let intY; 
    if (typeof x !== 'number' || typeof y !== 'number'){
        intX = parseInt(x);
        intY = parseInt(y);
    } else {
        intX = x;
        intY = y;
    }

    return {
        x: intX,
        y: intY,
    };
};

