/// <reference types="react" />
import * as IconMap from './icon-map';
import * as Color from './colors';
export declare type IconName = keyof typeof IconMap;
declare type Props = {
    color?: Color.Type;
    colorWeight?: number;
    width?: number | string;
    height?: number | string;
    className: string;
    marginLeft?: number;
    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    nudgeUp?: number;
    nudgeDown?: number;
    nudgeLeft?: number;
    nudgeRight?: number;
};
declare const SVGWrapper: ({ children, width, height, color, colorWeight, marginLeft, marginTop, marginRight, marginBottom, className, ...props }: Props & {
    children: JSX.Element;
}) => JSX.Element;
declare type IconProps = Props & {
    name: IconName;
};
declare const Icon: ({ name, ...props }: IconProps) => JSX.Element;
export { SVGWrapper, Icon };
export default Icon;
