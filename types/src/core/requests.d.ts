/**
 * Requests provide single-concern abstractions
 *  over the various backend APIs (Layout/Live).
 *
 * Not every external request is represented here. In some cases
 *  it is simpler to use the API SDK client interface directly.
 */
import { InternalProject, InternalSource, InternalUser } from './context';
import { Props } from './types';
import { LiveApiModel } from '@api.stream/sdk';
export declare const createProject: (request: {
    settings?: {
        [prop: string]: any;
    };
    props?: Props;
    size?: {
        x: number;
        y: number;
    };
    type?: 'sceneless' | 'freeform';
}) => Promise<LiveApiModel.CreateProjectResponse>;
export declare const deleteProject: (request: {
    projectId: string;
}) => Promise<void>;
/**
 * Load the user data from whatever access token has been registered
 *  with the API.
 */
export declare const loadUser: (size?: {
    x: number;
    y: number;
}) => Promise<{
    user: InternalUser;
    projects: InternalProject[];
    sources: InternalSource[];
}>;
export declare const loadCollections: () => Promise<LiveApiModel.Collection[]>;
export declare const createLayout: (request: {
    projectId: string;
    collectionId: string;
    settings: {
        [prop: string]: any;
    };
    size: {
        x: number;
        y: number;
    };
    type?: string;
}) => Promise<import("@api.stream/protocol-layout-api").Layout>;
