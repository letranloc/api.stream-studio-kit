import { Disposable } from '../core/types';
import type { PropsDefinition, CompositorBase } from './compositor';
declare type SourceMethods = Pick<SourceManager, 'getSource' | 'removeSource' | 'updateSource' | 'setSourceActive' | 'modifySourceValue'> & {
    addSource: (source: NewSource) => void;
};
export declare type SourceDeclaration = {
    /** The type to declare support for (e.g. 'MediaStreamVideo') */
    type: string;
    /**
     * The value-type constructor of a Source (e.g. MediaStream)
     *  Used for run-time validation.
     *
     * This is an approximation of the actual type
     *  definition of Source.value
     */
    valueType: any;
    /** The properties associated with an individual Source */
    props?: PropsDefinition;
    init?: (methods: SourceMethods) => void;
};
export declare type Source = {
    id: string;
    type: string;
    /** Indicates whether a source is ready to be rendered to the page */
    isActive: boolean;
    /**
     * Properties matching the schema supplied to SourceDeclaration for this Source type
     * */
    props: {
        [prop: string]: any;
    };
    value: any;
};
export declare type NewSource = {
    id: string;
    value: any;
    /**
     * A source may be set `inActive` to indicate that dependent elements
     *  should perhaps seek an alternative source.
     *
     * e.g. A webcam feed has been interrupted, but may come back online at any time.
     */
    isActive?: boolean;
    props?: {
        [prop: string]: any;
    };
};
export declare type SourceMap = {
    [type: string]: SourceDeclaration;
};
export declare const sourceTypes: SourceMap;
export declare type SourceRegister = (declaration: SourceDeclaration | SourceDeclaration[]) => void;
export declare type SourceSettings = {};
export declare const init: (settings: SourceSettings, compositor: CompositorBase) => {
    sourceIndex: {
        [id: string]: Source;
    };
    sourceTypeIndex: {
        [type: string]: Source[];
    };
    registerSource: SourceRegister;
    getSource: (id: string) => Source;
    getSources: (type: string) => Source[];
    useSource: (id: string, cb: (source: Source) => void) => Disposable;
    useSources: (type: string, cb: (sources: Source[]) => void) => Disposable;
    addSource: (type: string, source: NewSource) => void;
    removeSource: (id: string) => void;
    updateSource: (id: string, props: Source['props']) => void;
    /**
     * Imperatively update a Source's value.
     * Triggers an event to inform elements to re-render.
     */
    modifySourceValue: (id: string, cb: (value: Source['value']) => void) => Promise<void>;
    setSourceActive: (id: string, isActive?: boolean) => void;
};
export declare type SourceManager = ReturnType<typeof init>;
export {};
