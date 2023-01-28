import React from 'react';
import { Direction } from '../../animation/core';
import { Animations } from '../../animation';
export interface AnimationProps {
    id: string;
    type: string;
    enter: keyof typeof Animations;
    exit: keyof typeof Animations;
    children: React.ReactNode;
    style?: React.CSSProperties;
    delay?: string;
    hover?: boolean;
    viewport?: boolean;
    disabled?: boolean;
    tag?: string;
    className?: string;
    onClick?: Function;
    direction?: Direction;
    iterationCount?: number;
    duration?: number;
}
declare const APIKitAnimation: React.FC<AnimationProps>;
export default APIKitAnimation;
