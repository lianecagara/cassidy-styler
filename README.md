# Cassidy Styler

Cassidy Styler is a versatile library to style your texts using various Unicode fonts and formatting options. It allows you to easily apply different font styles to your text, format titles and content, and use special Unicode characters and symbols.

## Features

- Apply various Unicode font styles to your text
- Format titles and content with custom patterns
- Use a collection of special Unicode characters and symbols
- Abbreviate numbers with K (thousand), M (million), B (billion), etc.

## Installation

You can install Cassidy Styler using npm:

```sh
npm install cassidy-styler
```

## Usage

### Importing the Library

For CommonJS:

```js
const { FontSystem, format, UNIRedux } = require('cassidy-styler');
```

For ES Modules:

```mjs
import { FontSystem, format, UNIRedux } from 'cassidy-styler';
```

## API Reference

### FontSystem

#### `applyFonts(text: string, font: FontTypes = "none"): string`
**Purpose**: Applies a specified font style to a given text.

**Arguments**:
- `text` (string): The input text to style.
- `font` (FontTypes): The font type to apply. Default is `"none"`.

**Returns**: 
- (string): The formatted text.

**Example**:
```js
const styledText = FontSystem.applyFonts('Hello world', 'bold');
console.log(styledText); // Outputs: 𝗛𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹𝗱
```

#### `allFonts(): string`
**Purpose**: Retrieves a formatted list of all available font styles.

**Arguments**: None

**Returns**: 
- (string): A formatted list of all available font styles.

**Example**:
```js
console.log(FontSystem.allFonts());
```

### format

#### `format(title: string, content: string): string`
**Purpose**: Formats title and content text.

**Arguments**:
- `title` (string): The title text.
- `content` (string): The content text.

**Returns**: 
- (string): The formatted title and content.

**Example**:
```js
const formattedText = format("DeepSeek AI", "Hello, how can I assist you today?");
console.log(formattedText);
```

#### `format(options: FormatOptions): string`
**Purpose**: Formats title and content text with optional font styles and title patterns.

**Arguments**:
- `options` (FormatOptions): An object containing formatting options.
  - `title` (string): The title text.
  - `content` (string): The content text.
  - `titleFont` (FontTypes): The font type for the title. Default is `"bold"`.
  - `contentFont` (FontTypes): The font type for the content. Default is `"none"`.
  - `titlePattern` (string): The format pattern for the title.
  - `noFormat` (boolean): If true, skips formatting the title. Default is `false`.

**Returns**: 
- (string): The formatted title and content.

**Example**:
```js
const formattedText = format({
  title: 'Balance 💶',
  titlePattern: `{emojis} ${UNIRedux.arrow} {word}`,
  titleFont: 'double_struck',
  contentFont: 'fancy_italic',
  content: 'You have 1000$',
});
console.log(formattedText);
// 💶 ➤ 𝔹𝕒𝕝𝕒𝕟𝕔𝕖
// ━━━━━━━━━━━━━━━
// 𝘠𝘰𝘶 𝘩𝘢𝘷𝘦 𝟣𝟢𝟢𝟢$
```

### UNIRedux

A collection of special Unicode characters and symbols.

**Example**:
```js
console.log(UNIRedux.arrow); // Outputs: ➤
```

### abbreviateNumber

#### `abbreviateNumber(value: number | string, places = 2, isFull = false): string`
**Purpose**: Abbreviates a number using K (thousand), M (million), B (billion), etc.

**Arguments**:
- `value` (number | string): The number to abbreviate.
- `places` (number): The number of decimal places to round to. Default is `2`.
- `isFull` (boolean): If true, returns the full name instead of letter notation (e.g., "Thousand" instead of "K"). Default is `false`.

**Returns**: 
- (string): The abbreviated number.

**Example**:
```js
const abbreviatedNumber = abbreviateNumber(1234567);
console.log(abbreviatedNumber); // Outputs: 1.23M
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

## License

This project is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License. See the LICENSE file for details.

## Credits

This project was created by Liane Cagara ([@lianecagara](https://github.com/lianecagara)).

## Contributing

We welcome contributions! Please open a pull request to contribute to this project.
