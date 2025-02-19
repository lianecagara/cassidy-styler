import { FontSystem, format, UNIRedux } from "../dist/index.mjs";
console.log(FontSystem);
import { applyFonts } from "../dist/font.mjs";
console.log(FontSystem.allFonts());

console.log(FontSystem.fonts.bold("Hello world"));
console.log(applyFonts("uwu", "bold_italic"));

console.log(format("DeepSeek AI", "Hello, how can I assist you today?"));

console.log(
  format({
    title: "Balance 💶",
    titlePattern: `{emojis} ${UNIRedux.arrow} {word}`,
    titleFont: "double_struck",
    contentFont: "fancy_italic",
    content: "You have 1000$"
  })
);
console.log(
  format({
    title: "Balance 💶",
    titleFont: "double_struck",
    contentFont: "fancy_italic",
    content: "You have 1000$"
  })
);
console.log(
  format({
    title: "Balance 💶",
    titleFont: "double_struck",
    noFormat: true,
    contentFont: "fancy_italic",
    content: "You have 1000$"
  })
);
