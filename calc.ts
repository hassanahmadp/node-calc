// const inquirer = require("inquirer");
import inquirer from "inquirer";
import { add, subtract, multiply, divide } from "./utils/index.js";

const questions = [
  {
    type: "number",
    name: "num1",
    message: "Enter first number",
  },
  {
    type: "operator",
    name: "operator",
    message: "Enter operation",
  },
  {
    type: "number",
    name: "num2",
    message: "Enter second number",
  },
];

inquirer.prompt(questions).then(answers => {
  const { num1, num2, operator } = answers;
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      console.log("operator not supported");
      break;
  }
});
