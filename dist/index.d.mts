import { FontTypes } from './font.mjs';
export { default as FontSystem } from './font.mjs';

/**
 * Formats a title string by extracting and rearranging emojis and non-emoji characters based on a pattern.
 *
 * @param {string} str - The input string containing emojis and text.
 * @param {string} [pattern] - The format pattern where `{word}` represents non-emoji text and `{emojis}` represents extracted emojis.
 * @returns {string} - The formatted title string.
 */
declare function forceTitleFormat(str: string, pattern?: string): string;
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
declare function format(title: string, content: string): string;
/**
 * Formats title and content text with optional font styles and title patterns.
 */
declare function format({ title, content, contentFont, titleFont, titlePattern, noFormat, }: FormatOptions): string;
/**
 * A collection of special Unicode characters and symbols.
 * Provides commonly used characters like line separators, trademarks, mathematical symbols, and more.
 */
declare class UNIRedux {
    /** Special invisible space character */
    static specialSpace: string;
    /** Standard line repeated 1 time */
    static singleLine: string;
    /** Burger menu icon */
    static burger: "☰";
    /** Standard line repeated 15 times */
    static standardLine: string;
    /** Section sign */
    static section: "§";
    /** Pilcrow sign */
    static paragraph: "¶";
    /** Registered trademark sign */
    static registered: "®";
    /** Trademark sign */
    static trademark: "™";
    /** Copyright sign */
    static copyright: "©";
    /** Degree sign */
    static degree: "°";
    /** Micro sign */
    static micro: "µ";
    /** Bullet point */
    static bullet: "•";
    /** En dash */
    static enDash: "–";
    /** Em dash */
    static emDash: "—";
    /** Prime symbol */
    static prime: "′";
    /** Double prime symbol */
    static doublePrime: "″";
    /** Dagger symbol */
    static daggers: "†";
    /** Double dagger symbol */
    static doubleDagger: "‡";
    /** Ellipsis */
    static ellipsis: "…";
    /** Infinity symbol */
    static infinity: "∞";
    /** Generic currency sign */
    static currency: "¤";
    /** Yen sign */
    static yen: "¥";
    /** Euro sign */
    static euro: "€";
    /** Pound sign */
    static pound: "£";
    /** Plus-minus sign */
    static plusMinus: "±";
    /** Approximately equal sign */
    static approximately: "≈";
    /** Not equal to sign */
    static notEqual: "≠";
    /** Less than or equal to sign */
    static lessThanOrEqual: "≤";
    /** Greater than or equal to sign */
    static greaterThanOrEqual: "≥";
    /** Summation sign */
    static summation: "∑";
    /** Integral sign */
    static integral: "∫";
    /** Square root sign */
    static squareRoot: "√";
    /** Partial differential sign */
    static partialDifferential: "∂";
    /** Angle symbol */
    static angle: "∠";
    /** Degree Fahrenheit sign */
    static degreeFahrenheit: "℉";
    /** Degree Celsius sign */
    static degreeCelsius: "℃";
    /** Floral Heart symbol */
    static floralHeart: "❧";
    /** Star Flower symbol */
    static starFlower: "✻";
    /** Heavy Star symbol */
    static heavyStar: "★";
    /** Sparkle symbol */
    static sparkle: "✦";
    /** Asterisk symbol */
    static asterisk: "✱";
    /** Heavy Check Mark */
    static heavyCheckMark: "✔";
    /** Heavy Ballot X */
    static heavyBallotX: "✖";
    /** Heart symbol */
    static heart: "♥";
    /** Diamond symbol */
    static diamond: "♦";
    /** Club symbol */
    static club: "♣";
    /** Spade symbol */
    static spade: "♠";
    /** Musical Note symbol */
    static musicalNote: "♪";
    /** Double Musical Note symbol */
    static doubleMusicalNote: "♫";
    /** Snowflake symbol */
    static snowflake: "❄";
    /** Sparkle Star symbol */
    static sparkleStar: "✨";
    /** Anchor symbol */
    static anchor: "⚓";
    /** Umbrella symbol */
    static umbrella: "☔";
    /** Hourglass symbol */
    static hourglass: "⌛";
    /** Hourglass Not Done symbol */
    static hourglassNotDone: "⏳";
    /** Charm symbol */
    static charm: "✦";
    /** Disc symbol */
    static disc: "⦿";
    /** Arrow symbol */
    static arrow: "➤";
    /** Arrow (Black and White) symbol */
    static arrowBW: "➣";
    /** Arrow from Top symbol */
    static arrowFromT: "➥";
    /** Arrow from Bottom symbol */
    static arrowFromB: "➦";
    /** Restart symbol */
    static restart: "⟳";
    /** Arrow Outline symbol */
    static arrowOutline: "➩";
}
/**
 * Abbreviates a number using K (thousand), M (million), B (billion), etc.
 *
 * @param {number|string} value - The number to abbreviate.
 * @param {number} [places=2] - The number of decimal places to round to.
 * @param {boolean} [isFull=false] - If true, returns the full name instead of letter notation (e.g., "Thousand" instead of "K").
 * @returns {string} - The abbreviated number.
 */
declare function abbreviateNumber(value: number | string, places?: number, isFull?: boolean): string;

export { UNIRedux, abbreviateNumber, forceTitleFormat, format };
