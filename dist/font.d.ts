declare const fonts: Record<string, Record<string, string>>;
type FontsProxy = {
    [K in keyof typeof fonts as string]: (text: string) => string;
};
declare const FontSystem: {
    applyFonts(text: string, font?: string): string;
    allFonts(): string;
    fontMap: Record<string, Record<string, string>>;
    readonly fonts: FontsProxy;
};
declare const applyFonts: (text: string, font?: string) => string;
declare const allFonts: () => string;
declare const fontMap: Record<string, Record<string, string>>;
declare const fonts2: FontsProxy;

export { allFonts, applyFonts, FontSystem as default, fontMap, fonts2 as fonts };
