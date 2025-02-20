const fs = require("fs");

const filePath = "./side projects/JS/results.txt"


function add(a,b) {

    let result = a + b;
    return result;
    //addToFile(result.toString());
}

function subtract(a,b) {

    add(a,-b);
}

function multiply(a,b) {

    let result = a * b;
    return result;
    //addToFile(result.toString());
}

function divide(a,b) {
    
    multiply(a,1/b)
}

function addToFile(result) {
    fs.appendFile(filePath, result + "\n", (err) => {
    if (err) {
        console.error("Error writing the messages to the file:", err);
        return;
    }
    console.log("Result written to results.txt successfully!");
    });
}

module.exports = {add,subtract,multiply,divide};
