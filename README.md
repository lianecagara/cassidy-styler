# Cassidy UNICODE Styler

Cassidy UNICODE Styler is a versatile library for styling text using various Unicode fonts and formatting options. It provides tools to apply font styles, format titles and content, use special Unicode symbols, and abbreviate numbers.

## Features

- Apply various Unicode font styles to text (e.g., bold, fancy, double-struck).
- Format titles and content with custom patterns and separators.
- Access a collection of special Unicode characters and symbols via `UNIRedux`.
- Abbreviate numbers with K (thousand), M (million), B (billion), etc.
- Support for custom font tags and automatic bold/italic formatting.

## Installation

Install Cassidy Styler using npm:

```sh
npm install cassidy-styler
```
or
```sh
npm install @nea-liane/styler
```

## Usage

### Importing the Library

For CommonJS:

```js
const { FontSystem, format, createFormat, autoBold, fontTag, forceTitleFormat, UNIRedux, abbreviateNumber } = require('@nea-liane/styler');
```

For ES Modules:

```mjs
import { FontSystem, format, createFormat, autoBold, fontTag, forceTitleFormat, UNIRedux, abbreviateNumber } from '@nea-liane/styler';
```

## API Reference

### FontSystem

#### `FontSystem.applyFonts(text: string, font: FontTypes = "none"): string`
**Purpose**: Applies a specified Unicode font style to the given text.

**Arguments**:
- `text` (string): The input text to style.
- `font` (FontTypes): The font type to apply. Default is `"none"`.

**Returns**: 
- (string): The styled text.

**Example**:
```js
const styledText = FontSystem.applyFonts('Hello world', 'bold');
console.log(styledText); // Outputs: 𝗛𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹𝗱
```

#### `FontSystem.allFonts(): string`
**Purpose**: Retrieves a formatted list of all available font styles.

**Returns**: 
- (string): A formatted list of all available font styles.

**Example**:
```js
console.log(FontSystem.allFonts());
```

### format

#### `format(title: string, content: string, contentFont?: FontTypes): string`
**Purpose**: Formats a title and content with optional font styling for the content.

**Arguments**:
- `title` (string): The title text.
- `content` (string): The content text.
- `contentFont` (FontTypes, optional): The font type for the content.

**Returns**: 
- (string): The formatted title and content.

**Example**:
```js
const formattedText = format("DeepSeek AI", "Hello, how can I assist you today?", "fancy");
console.log(formattedText);
// 𝐃𝐞𝐞𝐩𝐒𝐞𝐞𝐤 𝐀𝐈
// ━━━━━━━━━━━━━━━
// 𝖧𝖾𝗅𝗅𝗈, 𝗁𝗈𝗐 𝖼𝖺𝗇 𝖨 𝖺𝗌𝗌𝗂𝗌𝗍 𝗒𝗈𝗎 𝗍𝗈𝖽𝖺𝗒?
```

#### `format(options: FormatOptions): string`
**Purpose**: Formats title and content with customizable font styles, title patterns, and line lengths.

**Arguments**:
- `options` (FormatOptions): An object containing:
  - `title` (string): The title text.
  - `content` (string): The content text.
  - `titleFont` (FontTypes, optional): Font for the title. Default is `"bold"`.
  - `contentFont` (FontTypes, optional): Font for the content. Default is `"fancy"`.
  - `titlePattern` (string, optional): Pattern for title formatting (e.g., `{emojis} {word}`).
  - `noFormat` (boolean, optional): If `true`, skips title formatting. Default is `false`.
  - `lineLength` (number, optional): Length of the separator line. Default is `15`.
  - `fontConfig` (ApplyFontConfig, optional): Custom font configuration.

**Returns**: 
- (string): The formatted title and content.

**Example**:
```js
const formattedText = format({
  title: 'Balance 💶',
  titlePattern: `{emojis} ${UNIRedux.arrow} {word}`,
  titleFont: 'double_struck',
  contentFont: 'fancy',
  content: 'You have 1000$',
});
console.log(formattedText);
// 💶 ➤ 𝔹𝕒𝕝𝕒𝕟𝕔𝕖
// ━━━━━━━━━━━━━━━
// 𝖸𝗈𝗎 𝗁𝖺𝗏𝖾 𝟣𝟢𝟢𝟢$
```

### createFormat

#### `createFormat(options: FormatOptionsNoContent): StyleFormatter`
**Purpose**: Creates a reusable formatter function for styling content with predefined options.

**Arguments**:
- `options` (FormatOptionsNoContent): Formatting options without the `content` field.

**Returns**: 
- (StyleFormatter): A function that formats content with the specified options.

**Example**:
```js
const formatter = createFormat({ title: 'Welcome', titleFont: 'bold', contentFont: 'fancy' });
console.log(formatter('Hello!'));
// 𝐖𝐞𝐥𝐜𝐨𝐦𝐞
// ━━━━━━━━━━━━━━━
// 𝖧𝖾𝗅𝗅𝗈!
```

### forceTitleFormat

#### `forceTitleFormat(str: string, pattern?: string): string`
**Purpose**: Formats a title string by rearranging emojis and non-emoji text based on a pattern.

**Arguments**:
- `str` (string): The input string containing emojis and text.
- `pattern` (string, optional): The format pattern (e.g., `{emojis} {word}`). Default is `{emojis} {word}`.

**Returns**: 
- (string): The formatted title string.

**Example**:
```js
console.log(forceTitleFormat('Balance 💶', `{emojis} ➤ {word}`));
// Outputs: 💶 ➤ Balance
```

### autoBold

#### `autoBold(text: string, config?: ApplyFontConfig): string`
**Purpose**: Applies bold and bold-italic formatting to text wrapped in `**` or `***`, and typewriter formatting to text in backticks.

**Arguments**:
- `text` (string): The input text.
- `config` (ApplyFontConfig, optional): Custom font configuration.

**Returns**: 
- (string): The formatted text.

**Example**:
```js
console.log(autoBold('**Bold** and ***Bold-Italic*** and `Typewriter`'));
// Outputs: 𝗕𝗼𝗹𝗱 and 𝘽𝙤𝙡𝙙-𝙄𝙩𝙖𝙡𝙞𝙘 and 𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛
```

### fontTag

#### `fontTag(text: string): string`
**Purpose**: Replaces custom font tags (e.g., `[font=bold]text[:font=bold]`) with corresponding font styles.

**Arguments**:
- `text` (string): The input text with font tags.

**Returns**: 
- (string): The text with font tags replaced.

**Example**:
```js
console.log(fontTag('[font=fancy]Hello[:font=fancy]'));
// Outputs: 𝖧𝖾𝗅𝗅𝗈
```

### UNIRedux

A collection of special Unicode characters and symbols, such as arrows, currency signs, and emojis.

**Example**:
```js
console.log(UNIRedux.arrow); // Outputs: ➤
console.log(UNIRedux.euro); // Outputs: €
```

### abbreviateNumber

#### `abbreviateNumber(value: number | string, places = 2, isFull = false): string`
**Purpose**: Abbreviates a number with K (thousand), M (million), B (billion), etc.

**Arguments**:
- `value` (number | string): The number to abbreviate.
- `places` (number, optional): Decimal places to round to. Default is `2`.
- `isFull` (boolean, optional): If `true`, uses full names (e.g., "Thousand"). Default is `false`.

**Returns**: 
- (string): The abbreviated number.

**Example**:
```js
console.log(abbreviateNumber(1234567)); // Outputs: 1.23M
console.log(abbreviateNumber(1234567, 2, true)); // Outputs: 1.23 Million
```

### FontTypes
```ts
type FontTypes =
  | "bold"
  | "fancy"
  | "bold_italic"
  | "fancy_italic"
  | "redux"
  | "widespace"
  | "serif"
  | "handwriting"
  | "scriptbold"
  | "script"
  | "typewriter"
  | "none"
  | "moody"
  | "double_struck";
```

## Documentation Tooling

For better code navigation and documentation, we recommend using JSDoc with Visual Studio Code or similar IDEs that support IntelliSense. JSDoc annotations in the source code enable auto-generated documentation and improved type checking. Install the VSCode extension "JSDoc" or use tools like TypeDoc to generate comprehensive API documentation from the JSDoc comments.

## License

This project is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License. See the LICENSE file for details.

## Credits

This project was created by Liane Cagara ([@lianecagara](https://github.com/lianecagara)).

## Contributing

We welcome contributions! Please open a pull request to contribute to this project.