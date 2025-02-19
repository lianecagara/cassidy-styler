const FontSystem = require("../dist/font.js");
console.log(FontSystem);
console.log(FontSystem.default);

console.log(FontSystem.allFonts());
const { applyFonts } = FontSystem;

console.log(FontSystem.fonts.bold("Hello world"));
console.log(applyFonts("uwu", "bold_italic"));
