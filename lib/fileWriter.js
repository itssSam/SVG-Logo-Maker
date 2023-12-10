// const fs = require("fs");
import fs from "fs";

function writeSVGToFile(content) {
    fs.writeFileSync("logo.svg", content);
}

// module.exports = { writeSVGToFile };
export { writeSVGToFile };