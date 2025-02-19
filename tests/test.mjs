import { FontSystem, UNIRedux } from "../dist/index.mjs";
console.log(FontSystem);
import { applyFonts } from "../dist/font.mjs";
console.log(FontSystem.allFonts());

console.log(FontSystem.fonts.bold("Hello world"));
console.log(applyFonts("uwu", "bold_italic"));
