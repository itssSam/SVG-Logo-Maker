// const inquirer = require("inquirer");
import inquirer from "inquirer";
import { Circle, Triangle, Square } from "./lib/shapes.js";
import { writeSVGToFile } from "./lib/fileWriter.js";
// const { Circle, Triangle, Sqaure } = require("./lib/shapes");
// const { writeSVGToFile } = require("./lib/fileWriter");

async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to three characters for the text:",
            validate: (input) => input.length <= 3,
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter the text color:",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose a shape",
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter the shape color:",
        }
    ]);
    return userInput;
}

function generateLogo(userInput) {
    let shape;

    switch (userInput.shape) {
        case "Circle":
            shape = new Circle();
            break;
        case "Triangle":
            shape = new Triangle();
            break;
        case "Square":
            shape = new Square();
            break;
        default:
            console.error("Invalid shape");
            process.exit(1);
    }
    shape.setColor(userInput.shapeColor);

    const svgContent = `<svg width="300" height="200">
    ${shape.render()}
    <text x="150" y="100" fill="${userInput.textColor}" font-size="30" text-anchor="middle">${userInput.text}</text>
  </svg>`;
    writeSVGToFile(svgContent);

    console.log("Generated logo.svg");
}

async function main() {
    const userInput = await getUserInput();
    generateLogo(userInput);
}

main();
 
