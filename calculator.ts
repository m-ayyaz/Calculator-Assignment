//Name: Muhammad Ayaz Munir
// Roll No:	PIAIC160920
// Course:	Certified Web 3.0 and Metaverse Developer
// Email:	muhammadayyazmunir@gmail.com

import showBanner from 'node-banner';
import inquirer from "inquirer";
import chalk from "chalk";
import * as addModule from "./operations/add.js";
import * as subtractModule from "./operations/subtract.js";
import * as multiplyModule from "./operations/multiply.js";
import * as divideModule from "./operations/divide.js";

interface OperationFunction {
  (calc1: number, calc2: number): number;
}

// async function main() {
  (async () => {
    await showBanner('Calculator');



  const Input1 = await inquirer.prompt({ type: 'number', name: "firstNumber", message: "Enter your first number:" });
  const num1 = parseFloat(Input1.firstNumber);

  const Input2 = await inquirer.prompt({ type: "number", name: "secondNumber", message: "Enter your second number:" });
  const num2 = parseFloat(Input2.secondNumber);
  const operationChoices = ["Add", "Subtract", "Multiply", "Divide"];
  const selectedOperationInput = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: "Select an operation which you like to perform:",
      choices: operationChoices,
    },
  ]);

  const selectedOperation = selectedOperationInput.operation;

  let operationFunction: OperationFunction;
  switch (selectedOperation) {
    case "Add":
      operationFunction = addModule.add;
      break;
    case "Subtract":
      operationFunction = subtractModule.subtract;
      break;
    case "Multiply":
      operationFunction = multiplyModule.multiply;
      break;
    case "Divide":
      operationFunction = divideModule.divide;
      break;
    default:
      throw new Error("Invalid operation selected.");
  }

  try {
    const result = operationFunction(num1, num2);
    console.log("--------------------------------------------")
    console.log(chalk.greenBright(`Result: ${result}`));
    console.log("--------------------------------------------")
  } catch (error) {
   console.error(chalk.red((error as any).message));
  }
}

)
();
