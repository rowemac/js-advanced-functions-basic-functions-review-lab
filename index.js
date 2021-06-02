// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(fun = "*") {
    return function(adjective = "special") {
        return `You are ${fun}${adjective}${fun}!`
    }

}

const Calculator = {

    add: function(num1, num2) {
        return num1 + num2;
    },

    subtract: function(num1, num2){
        return num1 - num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2; 
    },

    divide: function(num1, num2) {
        return num1 / num2;
    }

}

function actionApplyer(number, array) {
    for( let i = 0; i < array.length; i++ ) {
        number = array[i](number);
    }
    return number;
}