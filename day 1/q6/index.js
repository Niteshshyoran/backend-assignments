// const sum = require('./sum');
// const multiply = require('./multiplication');
// const subtract = require('./subtraction');
// const divide = require('./division');

// let sumA = 3, sumB = 5;
// let mulA = 4, mulB = 6;
// let subA = 9, subB = 2;
// let divA = 8, divB = 2;

// console.log(`Sum: ${sum(sumA, sumB)}`);
// console.log(`Multiplication: ${multiply(mulA, mulB)}`);
// console.log(`Subtraction: ${subtract(subA, subB)}`);
// console.log(`Division: ${divide(divA, divB)}`);


 

const operation = process.argv[2];
const a = parseInt(process.argv[3]);
const b = parseInt(process.argv[4]);

const sum = require('./sum');
const multiply = require('./multiplication');
const subtract = require('./subtraction');
const divide = require('./division');

switch (operation) {
    case 'sum':
        console.log(`Sum: ${sum(a, b)}`);
        break;
    case 'multiply':
        console.log(`Multiplication: ${multiply(a, b)}`);
        break;
    case 'subtract':
        console.log(`Subtraction: ${subtract(a, b)}`);
        break;
    case 'divide':
        try {
            console.log(`Division: ${divide(a, b)}`);
        } catch (error) {
            console.error(error.message);
        }
        break;
    default:
        console.log('Invalid operation. Use: sum, multiply, subtract, divide');
}
