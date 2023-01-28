import React from 'react';
import { InternalProject } from '../core/context';
import { CompositorSettings, SceneNode } from '../core/types';
/**
 * Render the output compositor displaying the stream canvas, which will be used
 * to display the live feed once a user starts their broadcast. Renders into a
 * supplied HTML element.
 *
 * This compositor may double as an interactive editor with optional settings.
 *
 * _Note: The compositor will automatically render at the largest possible size
 * accomodated by the element that is passed as its container. If the container
 * is smaller than the project resolution (e.g. 720px x 1280px), all of the canvas
 * elements will scale down automatically to fit._
 */
export declare const render: (settings: CompositorSettings) => void;
declare type CompositorContext = {
    interactive: boolean;
    project: InternalProject;
    checkIsDragTarget: (node: SceneNode) => boolean;
    checkIsDropTarget: (node: SceneNode) => boolean;
    onElementDoubleClick: (node: SceneNode) => void;
};
export declare const CompositorContext: React.Context<CompositorContext>;
export declare enum LogoPosition {
    TopLeft = "top-left",
    TopRight = "top-right",
    BottomLeft = "bottom-left",
    BottomRight = "bottom-right"
}
export declare enum BannerStyle {
    DEFAULT = "default",
    MINIMAL = "minimal",
    BUBBLE = "bubble"
}
export declare enum PlatformType {
    TWITCH = "twitch",
    YOUTUBE = "youtube"
}
export {};
