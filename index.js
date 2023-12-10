// Importing the 'inquirer' library for user input handling
import inquirer from "inquirer";

// Importing specific shapes (Circle, Triangle, Square) from the 'shapes.js' module
import { Circle, Triangle, Square } from "./lib/shapes.js";

// Importing the 'writeSVGToFile' function from the 'fileWriter.js' module
import { writeSVGToFile } from "./lib/fileWriter.js";

// Function to asynchronously get user input using inquirer prompts
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

// Function to generate a logo based on user input
function generateLogo(userInput) {
    let shape;

    // Switch statement to create an instance of the selected shape class
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

    // Setting the shape color based on user input
    shape.setColor(userInput.shapeColor);

    // Creating SVG content with the selected shape, text, and colors
    const svgContent = `<svg width="300" height="200">
    ${shape.render()}
    <text x="150" y="100" fill="${userInput.textColor}" font-size="30" text-anchor="middle">${userInput.text}</text>
  </svg>`;

    // Writing the SVG content to a file using the 'writeSVGToFile' function
    writeSVGToFile(svgContent);

    // Logging a message indicating successful logo generation
    console.log("Generated logo.svg");
}

// Main function to orchestrate the entire logo generation process
async function main() {
    // Obtaining user input using the 'getUserInput' function
    const userInput = await getUserInput();

    // Generating a logo based on the user input
    generateLogo(userInput);
}

// Invoking the main function to start the logo generation process
main();
