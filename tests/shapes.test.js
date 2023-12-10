// Importing the necessary shape classes (Circle, Triangle, Square) from the '../lib/shapes' module
const { Circle, Triangle, Square } = require("../lib/shapes");

// Test case for rendering a Circle
test("Circle render", () => {
    // Creating an instance of the Circle class
    const shape = new Circle();

    // Setting the color of the Circle to "blue"
    shape.setColor("blue");

    // Expecting the rendered SVG representation of the Circle to match the specified format
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
});

// Test case for rendering a Triangle
test("Triangle render", () => {
    // Creating an instance of the Triangle class
    const shape = new Triangle();

    // Setting the color of the Triangle to "green"
    shape.setColor("green");

    // Expecting the rendered SVG representation of the Triangle to match the specified format
    expect(shape.render()).toEqual(`<polygon points="150,30 225,150 75,150" fill="green" />`);
});

// Test case for rendering a Square
test("Square render", () => {
    // Creating an instance of the Square class
    const shape = new Square();

    // Setting the color of the Square to "red"
    shape.setColor("red");

    // Expecting the rendered SVG representation of the Square to match the specified format
    expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="red" />`);
});