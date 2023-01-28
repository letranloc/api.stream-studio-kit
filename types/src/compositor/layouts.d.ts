import { DataNode, SceneNode } from './compositor';
import * as CSS from 'csstype';
declare type LayoutProps = Partial<DataNode['props']>;
declare type Size = {
    x: string | number;
    y: string | number;
};
declare type Position = {
    x: string | number;
    y: string | number;
};
declare type Duration = string | number;
declare type Transition = {
    delay?: Duration;
    offset?: Position;
    scale?: {
        x?: number;
        y?: number;
    };
    opacity?: number;
    timingFn?: CSS.StandardProperties['transitionTimingFunction'] | 'exit';
};
export declare type LayoutChild = HTMLElement & {
    data: ChildPosition;
};
export declare type LayoutArgs = {
    props: LayoutProps;
    children: SceneNode[];
    size: {
        x: number;
        y: number;
    };
};
export declare type ChildPosition = {
    position: Position;
    size: Size;
    opacity: number;
    borderRadius: number;
    zIndex: number;
    entryTransition: Transition;
    exitTransition: Transition;
    rootOffset?: {
        x: number;
        y: number;
    };
};
export declare type ChildPositionIndex = {
    [nodeId: string]: ChildPosition;
};
export declare type LayoutResult = ChildPositionIndex | HTMLElement;
export declare type LayoutDefinition = ({ props, children, size, }: LayoutArgs) => LayoutResult;
export declare type LayoutMap = {
    [name: string]: LayoutDeclaration;
};
export declare type LayoutName = 'Grid' | 'Free' | 'Column' | 'Row' | 'Presentation' | 'Layered' | string;
export declare type LayoutDeclaration = {
    name: LayoutName;
    props?: any;
    layout: LayoutDefinition;
};
export declare type LayoutRegister = (declaration: LayoutDeclaration | LayoutDeclaration[]) => void;
export {};
