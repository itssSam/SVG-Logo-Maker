const { Circle, Triangle, Square } = require("../lib/shapes");

test("Circle render", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
});

test("Triangle render", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(`<polygon points="150,30 225,150 75,150" fill="green" />`);
});

test("Square render", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="red" />`);
})