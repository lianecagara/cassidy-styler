import { FontTypes } from './font.js';
export { default as FontSystem } from './font.js';

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
    lineLength?: number;
}
/**
 * Formats title and content text.
 */
declare function format(title: string, content: string, contentFont?: FontTypes): string;
/**
 * Formats title and content text with optional font styles and title patterns.
 */
declare function format({ title, content, contentFont, titleFont, titlePattern, noFormat, lineLength, }: FormatOptions): string;
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
/**
 * Transforms the input text by applying bold and bold-italic formatting.
 *
 * The function looks for text wrapped in `***` and `**` and replaces them with
 * bold-italic and bold formatting respectively.
 *
 * @param text - The input text to be transformed.
 * @returns The transformed text with bold and bold-italic formatting applied.
 */
declare function autoBold(text: string): string;
/**
 * Replaces custom font tags in the given text with corresponding font styles.
 *
 * The function looks for patterns in the format `[font=fontName]text[:font=fontName]`
 * and replaces them with the corresponding font styles if the font names match.
 *
 * @param text - The input text containing custom font tags.
 * @returns The text with font tags replaced by corresponding font styles.
 */
declare function fontTag(text: string): string;
type StrictMessageForm = {
    body?: string;
    attachment?: ReadableStream | ReadableStream[] | any | any[];
    mentions?: Mention[];
    location?: {
        latitude: number;
        longitude: number;
        current: boolean;
    };
};
type MessageForm = string | StrictMessageForm;
type FCAID = string | number;
type Mention = {
    tag: string;
    id: FCAID;
    fromIndex: number;
};
interface LiaIOQueue {
    form: MessageForm;
    senderID?: FCAID;
    replyTo?: FCAID | undefined;
    style?: FormatOptions;
    resolve?: (value: any) => any;
    reject?: (reason?: any) => any;
    event?: any;
    api?: any;
}
/**
 * @lianecagara
 * Class representing the LiaIOLite/Box for handling message input/output operations.
 * This class is responsible for sending, replying, and receiving messages,
 * as well as managing message reactions and handling events related to messages.
 *
 * @class Box
 */
declare class Box {
    #private;
    style: FormatOptions | undefined;
    /**
     * Creates an instance of the LiaIO class to manage message interactions.
     *
     * @param {API} api - The API instance for interacting with the messaging service.
     * @param {FCAMessageReplyEvent | any} event - The event that triggered the interaction.
     * @memberof Box
     */
    constructor(api: any, event: any, style?: FormatOptions);
    static queue: LiaIOQueue[];
    /**
     * Sends an output message, which can be a reply or a new message.
     *
     * @param params - The parameters for sending the message.
     * @param params.form - The form of the message to be sent.
     * @param params.senderID - The ID of the sender (optional).
     * @param params.replyTo - The ID of the message being replied to (optional).
     * @param style
     * @returns A promise resolving to the sent message event.
     * @memberof Box
     */
    out(param0: {
        form: MessageForm;
        senderID?: FCAID;
        replyTo?: FCAID;
        style?: FormatOptions;
    }): Promise<any>;
    static _processQueue(): Promise<void>;
    /**
     * Sends a reply to a message, optionally targeting a specific reply.
     *
     * @param form - The form of the reply message to be sent.
     * @param replyTo - The ID of the message being replied to (optional).
     * @returns A promise resolving to the message reply event.
     * @memberof Box
     * @example
     * await liaIO.reply("Hello, world!");
     */
    reply(form: MessageForm, replyTo?: FCAID): Promise<any>;
    /**
     * Sends a message to a destination, optionally specifying the destination ID.
     *
     * @param form - The form of the message to be sent.
     * @param senderID - The ID of the destination to send the message to (optional).
     * @memberof Box
     * @example
     * await liaIO.send("Hello, world!");
     */
    send(form: MessageForm, senderID?: FCAID): Promise<any>;
    /**
     * An easy way to handle errors.
     *
     * @param error - Error to be sent.
     */
    error(error: Error | Record<string, any>): Promise<any>;
    /**
     * Adds a reaction to a message, optionally targeting a specific message to react to.
     *
     * @param emoji - The reaction to be added (e.g., "like", "love").
     * @param reactTo - The ID of the message to react to (optional).
     * @returns A promise resolving to the sent reaction event.
     * @memberof Box
     */
    reaction(emoji: string, reactTo?: FCAID): Promise<any>;
    clone(): Box;
    styled(style: FormatOptions): Box;
}
declare const LiaIOLite: typeof Box;

export { Box, LiaIOLite, UNIRedux, abbreviateNumber, autoBold, fontTag, forceTitleFormat, format };
