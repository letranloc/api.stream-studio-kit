import { Compositor } from '../namespaces';
export declare type BannerProps = {
    headerText?: string;
    bodyText?: string;
    [prop: string]: any;
};
export declare type Banner = {
    id: string;
    props: BannerProps;
};
export declare type BannerSource = {
    id: string;
    value: BannerProps;
    props: BannerProps;
};
export declare const Banner: Compositor.Source.SourceDeclaration;
