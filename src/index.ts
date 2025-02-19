export { default as FontSystem } from "./font";
import { fonts, FontTypes } from "./font";

const line = "━";

/**
 * Formats a title string by extracting and rearranging emojis and non-emoji characters based on a pattern.
 *
 * @param {string} str - The input string containing emojis and text.
 * @param {string} [pattern] - The format pattern where `{word}` represents non-emoji text and `{emojis}` represents extracted emojis.
 * @returns {string} - The formatted title string.
 */
export function forceTitleFormat(str: string, pattern?: string): string {
  pattern ??= `{word} ${UNIRedux.charm} {emojis}`;
  const emojiRegex = /\p{Emoji}/gu;

  let emojis = [...str].filter((char) => emojiRegex.test(char)).join("");
  let nonEmojis = [...str]
    .filter((char) => !emojiRegex.test(char))
    .join("")
    .trim()
    .replaceAll("|", "");

  const res = pattern
    .replaceAll("{word}", nonEmojis)
    .replaceAll("{emojis}", emojis);

  return res;
}

interface FormatOptions {
  title: string;
  content: string;
  titleFont?: FontTypes;
  contentFont?: FontTypes;
  titlePattern?: string;
  noFormat?: boolean;
}

/**
 * Formats title and content text.
 */
export function format(title: string, content: string): string;

/**
 * Formats title and content text with optional font styles and title patterns.
 */
export function format({
  title,
  content,
  contentFont,
  titleFont,
  titlePattern,
  noFormat,
}: FormatOptions): string;

/**
 * Formats title and content text with optional font styles and title patterns.
 */
export function format(arg1: string | FormatOptions, arg2?: string): string {
  let options: FormatOptions;

  if (typeof arg1 === "string" && typeof arg2 === "string") {
    options = { title: arg1, content: arg2 };
  } else if (typeof arg1 === "object" && arg1 !== null) {
    options = arg1;
  } else {
    throw new Error("Invalid arguments");
  }

  options.titleFont ??= "bold";
  options.contentFont ??= "none";
  options.titlePattern ??= undefined;
  options.noFormat ??= false;

  return `${fonts[options.titleFont](
    !options.noFormat
      ? forceTitleFormat(options.title, options.titlePattern)
      : options.title
  )}\n${UNIRedux.standardLine}\n${fonts[options.contentFont](options.content)}`;
}

/**
 * A collection of special Unicode characters and symbols.
 * Provides commonly used characters like line separators, trademarks, mathematical symbols, and more.
 */
export class UNIRedux {
  /** Special invisible space character */
  static specialSpace = "ᅠ";

  /** Standard line repeated 1 time */
  static singleLine = line;

  /** Burger menu icon */
  static burger: "☰" = "☰";

  /** Standard line repeated 15 times */
  static standardLine = line.repeat(15);

  /** Section sign */
  static section: "§" = "§";

  /** Pilcrow sign */
  static paragraph: "¶" = "¶";

  /** Registered trademark sign */
  static registered: "®" = "®";

  /** Trademark sign */
  static trademark: "™" = "™";

  /** Copyright sign */
  static copyright: "©" = "©";

  /** Degree sign */
  static degree: "°" = "°";

  /** Micro sign */
  static micro: "µ" = "µ";

  /** Bullet point */
  static bullet: "•" = "•";

  /** En dash */
  static enDash: "–" = "–";

  /** Em dash */
  static emDash: "—" = "—";

  /** Prime symbol */
  static prime: "′" = "′";

  /** Double prime symbol */
  static doublePrime: "″" = "″";

  /** Dagger symbol */
  static daggers: "†" = "†";

  /** Double dagger symbol */
  static doubleDagger: "‡" = "‡";

  /** Ellipsis */
  static ellipsis: "…" = "…";

  /** Infinity symbol */
  static infinity: "∞" = "∞";

  /** Generic currency sign */
  static currency: "¤" = "¤";

  /** Yen sign */
  static yen: "¥" = "¥";

  /** Euro sign */
  static euro: "€" = "€";

  /** Pound sign */
  static pound: "£" = "£";

  /** Plus-minus sign */
  static plusMinus: "±" = "±";

  /** Approximately equal sign */
  static approximately: "≈" = "≈";

  /** Not equal to sign */
  static notEqual: "≠" = "≠";

  /** Less than or equal to sign */
  static lessThanOrEqual: "≤" = "≤";

  /** Greater than or equal to sign */
  static greaterThanOrEqual: "≥" = "≥";

  /** Summation sign */
  static summation: "∑" = "∑";

  /** Integral sign */
  static integral: "∫" = "∫";

  /** Square root sign */
  static squareRoot: "√" = "√";

  /** Partial differential sign */
  static partialDifferential: "∂" = "∂";

  /** Angle symbol */
  static angle: "∠" = "∠";

  /** Degree Fahrenheit sign */
  static degreeFahrenheit: "℉" = "℉";

  /** Degree Celsius sign */
  static degreeCelsius: "℃" = "℃";

  /** Floral Heart symbol */
  static floralHeart: "❧" = "❧";

  /** Star Flower symbol */
  static starFlower: "✻" = "✻";

  /** Heavy Star symbol */
  static heavyStar: "★" = "★";

  /** Sparkle symbol */
  static sparkle: "✦" = "✦";

  /** Asterisk symbol */
  static asterisk: "✱" = "✱";

  /** Heavy Check Mark */
  static heavyCheckMark: "✔" = "✔";

  /** Heavy Ballot X */
  static heavyBallotX: "✖" = "✖";

  /** Heart symbol */
  static heart: "♥" = "♥";

  /** Diamond symbol */
  static diamond: "♦" = "♦";

  /** Club symbol */
  static club: "♣" = "♣";

  /** Spade symbol */
  static spade: "♠" = "♠";

  /** Musical Note symbol */
  static musicalNote: "♪" = "♪";

  /** Double Musical Note symbol */
  static doubleMusicalNote: "♫" = "♫";

  /** Snowflake symbol */
  static snowflake: "❄" = "❄";

  /** Sparkle Star symbol */
  static sparkleStar: "✨" = "✨";

  /** Anchor symbol */
  static anchor: "⚓" = "⚓";

  /** Umbrella symbol */
  static umbrella: "☔" = "☔";

  /** Hourglass symbol */
  static hourglass: "⌛" = "⌛";

  /** Hourglass Not Done symbol */
  static hourglassNotDone: "⏳" = "⏳";

  /** Charm symbol */
  static charm: "✦" = "✦";

  /** Disc symbol */
  static disc: "⦿" = "⦿";

  /** Arrow symbol */
  static arrow: "➤" = "➤";

  /** Arrow (Black and White) symbol */
  static arrowBW: "➣" = "➣";

  /** Arrow from Top symbol */
  static arrowFromT: "➥" = "➥";

  /** Arrow from Bottom symbol */
  static arrowFromB: "➦" = "➦";

  /** Restart symbol */
  static restart: "⟳" = "⟳";

  /** Arrow Outline symbol */
  static arrowOutline: "➩" = "➩";
}

/**
 * Abbreviates a number using K (thousand), M (million), B (billion), etc.
 *
 * @param {number|string} value - The number to abbreviate.
 * @param {number} [places=2] - The number of decimal places to round to.
 * @param {boolean} [isFull=false] - If true, returns the full name instead of letter notation (e.g., "Thousand" instead of "K").
 * @returns {string} - The abbreviated number.
 */
export function abbreviateNumber(
  value: number | string,
  places = 2,
  isFull = false
): string {
  let num = Number(value);
  if (isNaN(num)) return "Invalid input";
  if (num < 1000) {
    return num.toFixed(places).replace(/\.?0+$/, "");
  }

  const suffixes = ["", "K", "M", "B", "T", "P", "E"];
  const fullSuffixes = [
    "",
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
  ];

  const magnitude = Math.floor(Math.log10(num) / 3);

  if (magnitude === 0) {
    return num % 1 === 0
      ? num.toString()
      : num.toFixed(places).replace(/\.?0+$/, "");
  }

  const abbreviatedValue = num / Math.pow(1000, magnitude);
  const suffix = isFull ? fullSuffixes[magnitude] : suffixes[magnitude];

  if (abbreviatedValue % 1 === 0) {
    return `${Math.round(abbreviatedValue)}${isFull ? ` ${suffix}` : suffix}`;
  }

  const formattedValue = abbreviatedValue.toFixed(places).replace(/\.?0+$/, "");

  return `${formattedValue}${isFull ? ` ${suffix}` : suffix}`;
}
