const fs = require("fs");
const path = require("path");

const ZWNBSP = String.fromCharCode(65279);
const CSS_FILE_PATH = path.resolve("dist/styles.min.css");

let minContent = fs.readFileSync(CSS_FILE_PATH, "utf8");
minContent = minContent.replaceAll(ZWNBSP, "");
fs.writeFileSync(CSS_FILE_PATH, minContent, "utf8");
