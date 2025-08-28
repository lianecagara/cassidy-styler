const {
  FontSystem,
  format,
  UNIRedux,
  createFormat,
  Datum,
  abbreviateNumber,
} = require("../");
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
    lineLength: 10,
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

const gardenStyle = createFormat({
  title: "🍓 Garden",
  titleFont: "bold",
  contentFont: "fancy",
});

console.log(gardenStyle("Congratulations **Nea** for your new garden!"));
console.log(
  gardenStyle("That's amazing!! Your new **balance** is $`100045000`")
);
console.log(
  gardenStyle(
    "Hello! Welcome, and this is your **Profile**\n`Name`: ***Liane Cagara***\n`URL`: https://facebook.com/nealiana.kaye.cagara\n\nHave a nice day!! ☕"
  )
);

const nums = [1, 2, 3, 4, 5, 6, 6, 2, 4, 5, 3];
console.log({
  nums,
  unique: Datum.toUniqueArray(nums, (i) => i),
  shuffled: Datum.shuffle(nums),
  shuffled2: Datum.shuffle(nums),
  shuffled3: Datum.shuffle(nums),
  shuffled4: Datum.shuffle(nums),
  shuffled5: Datum.shuffle(nums),
});

const abbr = 1e50;
console.log({
  num: abbr,
  abbr: abbreviateNumber(abbr),
  abbrFull: abbreviateNumber(abbr, 2, true),
});
