import { Compositor } from '../namespaces';
export declare type LogoProps = {
    src?: string;
    type?: 'logo';
    [prop: string]: any;
};
export declare type Logo = {
    id: string;
    props: LogoProps;
};
export declare type LogoSource = {
    id: string;
    value: LogoProps;
    props: LogoProps;
};
export declare const Logo: Compositor.Source.SourceDeclaration;
