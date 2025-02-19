type FontsProxy = {
    [K in FontTypes]: (text: string) => string;
};
type FontTypes = "bold" | "fancy" | "bold_italic" | "fancy_italic" | "redux" | "widespace" | "serif" | "handwriting" | "scriptbold" | "script" | "typewriter" | "none" | "moody" | "double_struck";
declare const FontSystem: {
    applyFonts(text: string, font?: FontTypes): string;
    allFonts(): string;
    fontMap: Record<string, Record<string, string>>;
    readonly fonts: FontsProxy;
};
declare const applyFonts: (text: string, font?: FontTypes) => string;
declare const allFonts: () => string;
declare const fontMap: Record<string, Record<string, string>>;
declare const fonts2: FontsProxy;

export { type FontTypes, allFonts, applyFonts, FontSystem as default, fontMap, fonts2 as fonts };
