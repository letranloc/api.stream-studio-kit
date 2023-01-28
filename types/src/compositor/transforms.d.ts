import { Disposable } from '../core/types';
import type { PropsDefinition, SceneNode } from './compositor';
import type { Source } from './sources';
export declare type TransformDeclaration = {
    name: string;
    sourceType?: string;
    useSource?: (sources: Source[], nodeProps: any) => Source;
    tagName?: string;
    props?: PropsDefinition;
    create?: (context: TransformContext, initialProps: any) => TransformElementBase;
};
export declare type TransformElementBase = {
    root: HTMLElement;
};
export declare type TransformElement = TransformElementBase & {
    role: string;
    nodeId: string;
    sourceType: string;
    proxySource: string;
    transformName: string;
    source?: Source;
    sourceValue?: any;
    _onNewSourceHandlers: Function[];
    _onUpdateHandlers: Function[];
    _onRemoveHandlers: Function[];
    _disposables: Disposable[];
};
export declare type TransformMap = {
    [name: string]: TransformDeclaration;
};
export declare type DefaultTransformMap = {
    [sourceType: string]: TransformDeclaration['name'];
};
export declare type TransformSettings = {
    defaultTransforms?: DefaultTransformMap;
};
export declare type TransformRegister = (declaration: TransformDeclaration | TransformDeclaration[]) => void;
export declare type TransformElementGetter = (node: SceneNode) => TransformElement;
export declare type TransformContext = {
    /** Listens for all events emitted by the compositor */
    onEvent?: (event: string, cb: (payload: any) => void, nodeId?: string) => Disposable;
    /** Called anytime the Source value returned by useSource is different */
    onNewSource?: (cb: (source: Source) => void) => void;
    /** Called anytime the Source value itself has been modified */
    onSourceModified?: (cb: (source: Source) => void) => void;
    /** Called anytime the Node associated with the element has been updated */
    onUpdate?: (cb: (nodeProps: any) => void) => void;
    /** Called when the Node associated with the element has been removed */
    onRemove?: (cb: (nodeProps: any) => void) => void;
};
export declare type Filter = (node: SceneNode) => SceneNode;
export declare const runFilters: (node: SceneNode, filters?: Filter[]) => SceneNode;
