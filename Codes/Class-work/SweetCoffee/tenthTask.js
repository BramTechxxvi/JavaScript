const mathOperations = (numberOne, numberTwo)=> {
    return {
    add: function() {
        return numberOne + numberTwo;
    },
    subtract: function() {
        return numberOne - numberTwo;
    },
    divide: function() {
        return numberOne / numberTwo;
    },
    multiply: function() {
        return numberOne * numberTwo;
    }
    }}
module.exports = mathOperations;