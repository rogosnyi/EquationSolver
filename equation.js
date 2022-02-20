"use strict";

var fs = require("fs");
const readline = require("readline-sync");

const start = process.argv[2];
if (start) {
  console.log("Selected non-interactive mode\n");
  let file = fs.readFileSync("text.txt", "utf8");
  const values = parceFile(file);

  console.log(`Equation is: ${values[0]}x^2 + ${values[1]}x + ${values[2]} `);
  equationSolve(values);
} else {
  console.log("Selected interactive mode\n");

  const values = parceConsole();
  console.log(`\nEquation is: ${values[0]}x^2 + ${values[1]}x + ${values[2]} `);
  equationSolve(values);
}

function parceFile(content) {
  let result = content.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = Number(result[i]);
  }
  return result;
}

function parceConsole() {
  const result = [];
  let a, b, c;
  let userInput;
  do {
    userInput = readline.question("Enter a: ");
    a = Number(userInput);
    if (isNaN(a)) {
      console.log("Input error. Value must me a number");
    } else {
      result.push(a);
    }
  } while (isNaN(a));

  do {
    userInput = readline.question("Enter b: ");
    b = Number(userInput);
    if (isNaN(b)) {
      console.log("Input error. Value must me a number");
    } else {
      result.push(b);
    }
  } while (isNaN(b));

  do {
    userInput = readline.question("Enter c: ");
    c = Number(userInput);
    if (isNaN(c)) {
      console.log("Input error. Value must me a number");
    } else {
      result.push(c);
    }
  } while (isNaN(c));

  return result;
}

function equationSolve(coef) {
  const a = coef[0];
  const b = coef[1];
  const c = coef[2];
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return console.log("There are 0 equation roots");
  if (discriminant > 0) {
    let x1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
    if (x1 === x2) {
      console.log(`There's one equation root: ${x1}`);
    } else console.log(`There's two equation roots:\nx1 = ${x1}\nx2 = ${x2}`);
  } else {
    let x1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
    console.log(`There's one equation root: ${x1}`);
  }
}
