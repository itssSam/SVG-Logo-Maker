// Base class representing a generic shape
class Shape {
    // Constructor initializes the color property to an empty string
    constructor() {
        this.color = "";
    }

    // Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }

    // Abstract method for rendering a shape; to be implemented in child classes
    render() {
        // Placeholder return statement since this method is meant to be implemented in child classes
        return "";
    }
}

// Derived class representing a Circle, extending the Shape class
class Circle extends Shape {
    // Overrides the render method to provide the SVG representation of a Circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Derived class representing a Triangle, extending the Shape class
class Triangle extends Shape {
    // Overrides the render method to provide the SVG representation of a Triangle
    render() {
        return `<polygon points="150,30 225,150 75,150" fill="${this.color}" />`;
    }
}

// Derived class representing a Square, extending the Shape class
class Square extends Shape {
    // Overrides the render method to provide the SVG representation of a Square
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

// Exporting the Shape base class and its derived classes for use in other modules
export { Shape, Circle, Triangle, Square };