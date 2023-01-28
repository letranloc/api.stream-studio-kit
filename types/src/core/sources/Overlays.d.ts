import { Compositor } from '../namespaces';
export declare type OverlayProps = {
    src?: string;
    type?: 'video-overlay' | 'overlay';
    [prop: string]: any;
};
export declare type Overlay = {
    id: string;
    props: OverlayProps;
};
export declare type OverlaySource = {
    id: string;
    value: OverlayProps;
    props: OverlayProps;
};
export declare const Overlays: Compositor.Source.SourceDeclaration;
