import type { ThemeProp } from '../types';
import { IconSource } from './Icon';
declare type Props = {
    /**
     * Icon to display for the `CrossFadeIcon`.
     */
    source: IconSource;
    /**
     * Color of the icon.
     */
    color: string;
    /**
     * Size of the icon.
     */
    size: number;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
declare const CrossFadeIcon: ({ color, size, source, theme: themeOverrides, }: Props) => JSX.Element;
export default CrossFadeIcon;
//# sourceMappingURL=CrossFadeIcon.d.ts.map