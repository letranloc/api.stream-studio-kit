import { Compositor } from '../namespaces';
/**
 * ChatOverlayProps is an object that has a property called metadata that can be of any type.
 * @property {string} id - Unique identifier for the chat message.
 * @property {string} username - The display name of the chat message.
 * @property {any} message - The message that the user has sent.
 * @property metadata - This is a property that can be of any type.
 */
export declare type ChatOverlayProps = {
    id?: string;
    username?: string;
    message?: any;
    metadata: {
        [prop: string]: any;
    };
};
export declare const ChatOverlay: Compositor.Transform.TransformDeclaration;
