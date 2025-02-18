const fs = require("fs");
const path = require("path");

const dirs = ["./dist/cjs", "./dist/esm"];

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory created: ${dir}`);
  }
});
