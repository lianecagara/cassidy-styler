export { default as FontSystem } from "./font";
import { fonts, FontTypes } from "./font";

const line = "━";

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
}

export function format(title: string, content: string): string;

export function format({
  title,
  content,
  contentFont,
  titleFont,
  titlePattern,
}: FormatOptions): string;

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

  return `${fonts[options.titleFont](
    options.titlePattern
      ? forceTitleFormat(options.title, options.titlePattern)
      : options.title
  )}\n${UNIRedux.standardLine}\n${fonts[options.contentFont](options.content)}`;
}

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
