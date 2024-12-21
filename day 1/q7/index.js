const crypto = require("crypto");

const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);

function randomNumber(length) {
  return crypto.randomBytes(length).toString("hex");
}

switch (operation) {
  case "add":
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for addition.");
    } else {
      console.log("Result:", numbers.reduce((a, b) => a + b, 0));
    }
    break;

  case "sub":
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for subtraction.");
    } else {
      console.log("Result:", numbers.reduce((a, b) => a - b));
    }
    break;

  case "mult":
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for multiplication.");
    } else {
      console.log("Result:", numbers.reduce((a, b) => a * b, 1));
    }
    break;

  case "divide":
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for division.");
    } else if (numbers.slice(1).includes(0)) {
      console.log("Division by zero is not allowed.");
    } else {
      console.log("Result:", numbers.reduce((a, b) => a / b));
    }
    break;

  case "sin":
    if (numbers.length !== 1) {
      console.log("Provide exactly one number for sine operation.");
    } else {
      console.log("Result:", Math.sin(numbers[0]));
    }
    break;

  case "cos":
    if (numbers.length !== 1) {
      console.log("Provide exactly one number for cosine operation.");
    } else {
      console.log("Result:", Math.cos(numbers[0]));
    }
    break;

  case "tan":
    if (numbers.length !== 1) {
      console.log("Provide exactly one number for tangent operation.");
    } else {
      console.log("Result:", Math.tan(numbers[0]));
    }
    break;

  case "random":
    if (numbers.length !== 1) {
      console.log("Provide length for random number generation.");
    } else {
      console.log("Random Number:", randomNumber(numbers[0]));
    }
    break;

  default:
    console.log("Invalid operation. Supported operations: add, sub, mult, divide, sin, cos, tan, random");
}
