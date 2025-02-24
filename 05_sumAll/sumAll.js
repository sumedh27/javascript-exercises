const sumAll = function(valueOne,valueTwo) {
    if (!Number.isInteger(valueOne) || !Number.isInteger(valueTwo)) return "ERROR";
    if(valueOne < 0 || valueTwo < 0 ) return `ERROR`;

    if(valueOne > valueTwo){
        const temp = valueOne;
        valueOne = valueTwo;
        valueTwo = temp;
    }

    let sum = 0;
    for(let i = valueOne; i <= valueTwo;i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
