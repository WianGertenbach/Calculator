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
    if (y === 0){
        return 'Error: Division by zero';
    }
    return x/y;
    //return arr.reduce((sum, current) => sum/current,1);
};

function operate(x,y,operator) {
    return operator(x,y);
}