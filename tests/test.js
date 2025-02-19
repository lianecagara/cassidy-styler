const { FontSystem, format, UNIRedux } = require("../");
console.log(FontSystem);
console.log(FontSystem.default);

console.log(FontSystem.allFonts());
const { applyFonts } = FontSystem;

console.log(FontSystem.fonts.bold("Hello world"));
console.log(applyFonts("uwu", "bold_italic"));

console.log(format("DeepSeek AI", "Hello, how can I assist you today?"));

console.log(
  format({
    title: "Balance 💶",
    titlePattern: `{emojis} ${UNIRedux.arrow} {word}`,
    titleFont: "double_struck",
    contentFont: "fancy_italic",
    content: "You have 1000$",
  })
);
console.log(
  format({
    title: "Balance 💶",
    titleFont: "double_struck",
    contentFont: "fancy_italic",
    content: "You ***have*** 1000$",
  })
);
console.log(
  format({
    title: "Balance 💶",
    titleFont: "double_struck",
    noFormat: true,
    contentFont: "fancy_italic",
    content: "You **have** 1000$",
  })
);
