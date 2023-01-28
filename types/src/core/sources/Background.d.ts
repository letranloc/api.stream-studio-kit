import { Compositor } from '../namespaces';
export declare type BackgroundProps = {
    src?: string;
    type?: 'image-background' | 'video-background';
    [prop: string]: any;
};
export declare type Background = {
    id: string;
    props: BackgroundProps;
};
export declare type BackgroundSource = {
    id: string;
    value: BackgroundProps;
    props: BackgroundProps;
};
export declare const Background: Compositor.Source.SourceDeclaration;
