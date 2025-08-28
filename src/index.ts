export { default as FontSystem } from "./font";
import { ApplyFontConfig, fonts, FontTypes } from "./font";

export const line = "━";
export { fonts };

/**
 * Formats a title string by extracting and rearranging emojis and non-emoji characters based on a pattern.
 *
 * @param {string} str - The input string containing emojis and text.
 * @param {string} [pattern] - The format pattern where `{word}` represents non-emoji text and `{emojis}` represents extracted emojis.
 * @returns {string} - The formatted title string.
 */
export function forceTitleFormat(str: string, pattern?: string): string {
  pattern ??= `{emojis} {word}`;
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

export type StyleFormatter = (content: string, extra?: FormatOptions) => string;

/**
 * Creates a reusable formatter that formats title and content text with optional font styles and title patterns.
 */
export function createFormat({
  title,
  contentFont,
  titleFont,
  titlePattern,
  noFormat,
  lineLength,
  fontConfig,
}: FormatOptionsNoContent): StyleFormatter;

export function createFormat(options: FormatOptionsNoContent): StyleFormatter {
  return function (content, extra) {
    const normalized = normalizeFormatOverloads({
      ...options,
      ...(extra ?? []),
      content,
    });
    return format({ ...normalized });
  };
}

export interface FormatOptionsNoContent {
  title: string;
  titleFont?: FontTypes;
  contentFont?: FontTypes;
  titlePattern?: string;
  noFormat?: boolean;
  lineLength?: number;
  fontConfig?: ApplyFontConfig;
}
export type FormatOptions = FormatOptionsNoContent & {
  content: string;
};

export function normalizeFormatOverloads(
  arg1: string | FormatOptions,
  arg2?: string,
  arg3?: FontTypes | undefined
): FormatOptions {
  let options: FormatOptions;

  if (typeof arg1 === "string" && typeof arg2 === "string") {
    options = { title: arg1, content: arg2, contentFont: arg3 };
  } else if (typeof arg1 === "object" && arg1 !== null) {
    options = arg1;
  } else {
    throw new Error("Invalid arguments");
  }

  options.titleFont ??= "bold";
  options.contentFont ??= "fancy";
  options.titlePattern ??= undefined;
  options.noFormat ??= false;
  options.lineLength ??= 15;
  return options;
}

/**
 * Formats title and content text.
 */
export function format(
  title: string,
  content: string,
  contentFont?: FontTypes
): string;

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
  lineLength,
  fontConfig,
}: FormatOptions): string;

/**
 * Formats title and content text with optional font styles and title patterns.
 */
export function format(
  arg1: string | FormatOptions,
  arg2?: string,
  arg3?: FontTypes | undefined
): string {
  const options = normalizeFormatOverloads(arg1, arg2, arg3);
  return `${fonts[options.titleFont ? options.titleFont : "bold"](
    !options.noFormat
      ? forceTitleFormat(options.title, options.titlePattern)
      : options.title,
    options.fontConfig
  )}\n${line.repeat(options.lineLength ?? 15)}\n${fonts[
    options.contentFont ?? "fancy"
  ](autoBold(options.content, options.fontConfig), options.fontConfig)}`;
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

/**
 * Transforms the input text by applying bold and bold-italic formatting.
 *
 * The function looks for text wrapped in `***` and `**` and replaces them with
 * bold-italic and bold formatting respectively.
 *
 * @param text - The input text to be transformed.
 * @returns The transformed text with bold and bold-italic formatting applied.
 */
export function autoBold(text: string, config?: ApplyFontConfig) {
  text = String(text);
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, (_: string, text: string) =>
    fonts.bold_italic(text, config)
  );
  text = text.replace(/\*\*(.*?)\*\*/g, (_: string, text: string) =>
    fonts.bold(text, config)
  );
  text = text.replace(/`(.*?)`/g, (_: string, text: string) =>
    fonts.typewriter(text, config)
  );
  return text;
}

/**
 * Replaces custom font tags in the given text with corresponding font styles.
 *
 * The function looks for patterns in the format `[font=fontName]text[:font=fontName]`
 * and replaces them with the corresponding font styles if the font names match.
 *
 * @param text - The input text containing custom font tags.
 * @returns The text with font tags replaced by corresponding font styles.
 */
export function fontTag(text: string) {
  text = String(text);
  text = text.replace(
    /\[font=(.*?)\]\s*(.*?)\s*\[:font=(.*?)\]/g,
    (_, font, text, font2) =>
      font === font2 ? fonts[font as FontTypes](text) : text
  );
  return text;
}

type StrictMessageForm = {
  body?: string;
  attachment?: ReadableStream | ReadableStream[] | any | any[];
  mentions?: Mention[];
  location?: { latitude: number; longitude: number; current: boolean };
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
export class Box {
  #api: any = null;
  #event: any = null;
  public style: FormatOptions | undefined;

  /**
   * Creates an instance of the LiaIO class to manage message interactions.
   *
   * @param {API} api - The API instance for interacting with the messaging service.
   * @param {FCAMessageReplyEvent | any} event - The event that triggered the interaction.
   * @memberof Box
   */
  constructor(api: any, event: any, style?: FormatOptions) {
    this.#api = api;
    this.#event = event;
    this.style = style;
  }

  static queue: LiaIOQueue[] = [];

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
  async out(param0: {
    form: MessageForm;
    senderID?: FCAID;
    replyTo?: FCAID;
    style?: FormatOptions;
  }): Promise<any> {
    const {
      form: oform,
      senderID = this.#event.threadID,
      replyTo = undefined,
      style = null,
    } = param0;
    const form = normalizeMessageForm(oform) as StrictMessageForm;

    let exMents: Mention[] = [];
    if (typeof form.body === "string") {
      const ments = form.body.match(/@\[(.*?)=(.*?)\]/g);
      if (Array.isArray(ments)) {
        for (const ment of ments) {
          const [tag, uid] = ment.slice(2, -1).split("=");
          form.body = form.body.replace(ment, `@${tag}`);
          exMents.push({
            id: uid,
            tag,
            fromIndex: form.body.indexOf(`@${tag}`),
          });
        }
      }
    }
    let styler: FormatOptions | undefined = this.style;
    if (style) {
      styler = style;
    }
    if (styler && form.body && styler !== undefined && styler.title) {
      const combined: FormatOptions = {
        ...styler,
        content: form.body,
      };
      form.body = format(combined);
    }

    return new Promise(async (resolve, reject) => {
      form.mentions = [...exMents, ...(form.mentions ?? [])];
      for (const key in form) {
        if (
          form[key as keyof StrictMessageForm] === null ||
          form[key as keyof StrictMessageForm] === undefined
        ) {
          delete form[key as keyof StrictMessageForm];
        }
        if (!form.mentions || form.mentions.length < 1) {
          delete form.mentions;
        }
      }
      console.log(`Form to send:`, form, senderID, replyTo);
      /**
       * @type {LiaIOQueue}
       */
      const queueItem: LiaIOQueue = {
        ...param0,
        senderID,
        replyTo,
        style: styler,
        form,
        resolve,
        reject,
        api: this.#api,
        event: this.#event,
      };
      Box.queue.push(queueItem);

      if (Box.queue.length === 1) {
        Box._processQueue();
      }
    });
  }

  static async _processQueue() {
    console.log(`Processing Queue..`);
    while (this.queue.length > 0) {
      const currentTask = this.queue[0];
      console.log(
        `Current Queue task (total ${this.queue.length}):`,
        currentTask.form
      );

      if (this.queue.length > 1) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      try {
        console.log(`Sending form...`, currentTask.form);
        const {
          api,
          form: oform,
          reject,
          resolve,
          replyTo,
          senderID,
        } = currentTask;
        const form = normalizeMessageForm(oform);
        api.sendMessage(
          form,
          senderID,
          (err: any, info: any) => {
            if (err && reject) {
              reject(err);
            } else if (resolve) {
              console.log(`Form sent:`, form, senderID, replyTo);

              resolve(info);
            }
          },
          replyTo ?? undefined
        );
      } catch (error) {
        currentTask.reject?.(error);
      }
      this.queue.shift();
      console.log(`Moving to next queue`);
    }
  }

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
  reply(
    form: MessageForm,
    replyTo: FCAID = this.#event.messageID
  ): Promise<any> {
    return this.out({
      form,
      replyTo,
    });
  }
  /**
   * Sends a message to a destination, optionally specifying the destination ID.
   *
   * @param form - The form of the message to be sent.
   * @param senderID - The ID of the destination to send the message to (optional).
   * @memberof Box
   * @example
   * await liaIO.send("Hello, world!");
   */
  send(
    form: MessageForm,
    senderID: FCAID = this.#event.threadID
  ): Promise<any> {
    return this.out({
      form,
      senderID,
    });
  }

  /**
   * An easy way to handle errors.
   *
   * @param error - Error to be sent.
   */
  error(error: Error | Record<string, any>): Promise<any> {
    const errString =
      error instanceof Error
        ? String(error.stack)
        : JSON.stringify(error, null, 2);
    console.error(error);
    return this.reply(errString);
  }

  /**
   * Adds a reaction to a message, optionally targeting a specific message to react to.
   *
   * @param emoji - The reaction to be added (e.g., "like", "love").
   * @param reactTo - The ID of the message to react to (optional).
   * @returns A promise resolving to the sent reaction event.
   * @memberof Box
   */
  reaction(
    emoji: string,
    reactTo: FCAID = this.#event.messageID
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.#api.setMessageReaction(emoji, reactTo, (err: any) => {
        if (err) {
          return reject(err);
        }
        return resolve(true);
      });
    });
  }

  clone(): Box {
    return new Box(this.#api, this.#event, this.style);
  }

  styled(style: FormatOptions) {
    return new Box(this.#api, this.#event, style);
  }
}

function normalizeMessageForm(form: MessageForm): StrictMessageForm {
  let r: Record<string, any> = {};
  if (form && r) {
    if (typeof form === "object") {
      r = form;
    }

    if (typeof form === "string") {
      r = {
        body: form,
      };
    }
    if (!Array.isArray(r.attachment) && r.attachment) {
      r.attachment = [r.attachment];
    }
    return r;
  } else {
    return {
      body: undefined,
    };
  }
}

export const LiaIOLite = Box;
export * from "./font";
