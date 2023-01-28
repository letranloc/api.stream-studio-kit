import { color } from 'csx';
export { color };
export declare const of: typeof color;
export declare const transparent: import("csx").ColorHelper;
export declare const white: import("csx").ColorHelper;
export declare const black: import("csx").ColorHelper;
/**
 * Studio2 colors
 */
declare const weights: {
    readonly primary: {
        readonly 50: "#EAFAF5";
        readonly 100: "#D5F6EB";
        readonly 200: "#ABEDD7";
        readonly 300: "#82E3C3";
        readonly 400: "#58DAAF";
        readonly 500: "#26AD80";
        readonly 600: "#25A77C";
        readonly 700: "#1C7D5D";
        readonly 800: "#12543E";
    };
    readonly secondary: {
        readonly 50: "#FBEAEA";
        readonly 100: "#F7D4D4";
        readonly 200: "#EFA9A9";
        readonly 300: "#E77E7E";
        readonly 400: "#FF6F64";
        readonly 500: "#E9554A";
        readonly 600: "#CB362B";
        readonly 700: "#811818";
        readonly 800: "#561010";
    };
    readonly neutral: {
        readonly 0: "#ffffff";
        readonly 10: "#f5f5f5";
        readonly 200: "#d9d9d9";
        readonly 300: "#bababa";
        readonly 350: "#999999";
        readonly 400: "#9e9e9e";
        readonly 500: "#808080";
        readonly 600: "#666666";
        readonly 700: "#4d4d4d";
        readonly 800: "#303030";
        readonly 900: "#141414";
        readonly 1000: "#000000";
    };
    readonly warning: {
        readonly 400: "#FFC28A";
        readonly 500: "#FFAE64";
        readonly 600: "#F29540";
    };
};
export declare type Type = keyof typeof weights;
export declare const types: ("primary" | "secondary" | "neutral" | "warning")[];
export declare const primary: (weight: number) => any;
export declare const neutral: (weight: number) => any;
export declare const secondary: (weight: number) => any;
export declare const warning: (weight: number) => any;
/**
 * Brand primary colors
 */
export declare const lightstream: import("csx").ColorHelper;
export declare const twitch: import("csx").ColorHelper;
export declare const linkedin: import("csx").ColorHelper;
export declare const youtube: import("csx").ColorHelper;
export declare const facebook: import("csx").ColorHelper;
export declare const twitter: import("csx").ColorHelper;
