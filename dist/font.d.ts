type FontsProxy = {
    [K in FontTypes]: (text: string) => string;
};
type FontTypes = "bold" | "fancy" | "bold_italic" | "fancy_italic" | "redux" | "widespace" | "serif" | "handwriting" | "scriptbold" | "script" | "typewriter" | "none" | "moody" | "double_struck";
declare const FontSystem: {
    /**
     * Applies a specified font style to a given text.
     *
     * @param {string} text - The input text to style.
     * @param {FontTypes} [font="none"] - The font type to apply.
     * @returns {string} - The formatted text.
     */
    applyFonts(text: string, font?: FontTypes): string;
    /**
     * Retrieves a formatted list of all available font styles.
     */
    allFonts(): string;
    /**
     * A direct reference to the font mapping object.
     */
    fontMap: Record<string, Record<string, string>>;
    /**
     * Provides a proxy to dynamically apply fonts without explicitly calling `applyFonts`.
     */
    readonly fonts: FontsProxy;
};
declare const applyFonts: (text: string, font?: FontTypes) => string;
declare const allFonts: () => string;
declare const fontMap: Record<string, Record<string, string>>;
declare const fonts2: FontsProxy;

export { type FontTypes, allFonts, applyFonts, FontSystem as default, fontMap, fonts2 as fonts };
