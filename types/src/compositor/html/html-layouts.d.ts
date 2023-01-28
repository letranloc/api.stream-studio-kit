import { SceneNode } from '../index';
import { ChildPosition, ChildPositionIndex, LayoutArgs, LayoutMap, LayoutRegister } from '../layouts';
export declare class Layout extends HTMLElement {
    parentEl: HTMLElement;
    slotEl: HTMLElement;
    parentLayout: Layout;
    nodes: SceneNode[];
    mutationObserver: MutationObserver;
    latestSize: {
        x: number;
        y: number;
    };
    isFirst: boolean;
    isUpdating: boolean;
    cid: number;
    constructor();
    log(...args: any[]): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    updatePositions(options: {
        size?: {
            x: number;
            y: number;
        };
        inserted?: Set<string>;
        removed?: Set<string>;
    }): void;
    initializeChild(childEl: Partial<ChildEl>): void;
}
export declare const ensureLayoutContainer: (size: {
    x: number;
    y: number;
}) => HTMLElement;
declare type ChildEl = HTMLElement & {
    runRemove: () => Promise<void>;
    _remove: HTMLElement['remove'];
    parentEl: HTMLElement;
    previousSiblingEl: ChildNode;
    nextSiblingEl: ChildNode;
    removed: boolean;
    transition?: Promise<void>;
    dataset: {
        id: string;
    };
    data: ChildPosition;
    mutationObserver?: MutationObserver;
};
export declare const layoutChildren: ({ id, props, children, size, }: LayoutArgs & {
    id: string;
}) => ChildPositionIndex;
export declare const htmlLayouts: LayoutMap;
export declare const registerLayout: LayoutRegister;
export {};
