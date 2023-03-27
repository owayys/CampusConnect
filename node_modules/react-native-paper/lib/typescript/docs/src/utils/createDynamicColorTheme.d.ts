declare type Config = {
    sourceColor: string;
};
declare type Schemes = {
    light: {
        [key in string]: string;
    };
    dark: {
        [key in string]: string;
    };
};
declare const createDynamicThemeColors: ({ sourceColor }: Config) => Schemes;
export default createDynamicThemeColors;
//# sourceMappingURL=createDynamicColorTheme.d.ts.map