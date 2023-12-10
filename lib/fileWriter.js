// Importing the 'fs' module for file system operations
import fs from "fs";

// Function to write SVG content to a file named "logo.svg"
function writeSVGToFile(content) {
    // Synchronously writing the SVG content to the file
    fs.writeFileSync("logo.svg", content);
}

// Exporting the 'writeSVGToFile' function for use in other modules
export { writeSVGToFile };