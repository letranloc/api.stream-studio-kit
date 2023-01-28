import type { CompositorBase, SceneNode } from '../compositor';
import { SourceManager } from '../sources';
import { TransformDeclaration, TransformElement, TransformMap, TransformRegister, TransformSettings } from '../transforms';
export declare const init: (settings: TransformSettings, compositor: CompositorBase, sourceManager: SourceManager) => {
    transforms: TransformMap;
    nodeElementIndex: {
        [nodeId: string]: TransformElement;
    };
    elementSourceTypeIndex: {
        [type: string]: TransformElement[];
    };
    registerTransform: TransformRegister;
    getElementsBySourceType: (type: string) => TransformElement[];
    getElementByNodeId: (name: string) => TransformElement;
    getTransformByName: (name: string) => TransformDeclaration;
    updateSourceForNode: (nodeId: string) => void;
    renderTree: (node: SceneNode) => SceneNode;
    getElement: (node: SceneNode) => TransformElement;
};
export declare type TransformManager = ReturnType<typeof init>;
