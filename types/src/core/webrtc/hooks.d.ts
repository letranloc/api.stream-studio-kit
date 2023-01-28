import React from 'react';
import { LSRoomContext, ChatObject } from './room-context';
import { Room, Participant, RoomEvent, ConnectionQuality, TrackPublication } from 'livekit-client';
declare type ChatState = ChatObject[];
/**
 * Basically replicates the same functionality as livekit-react's own useRoom hook.
 * Returns { room, participants, connect, isConnecting, chatHistory, sendChatMessage, isAdmin, removeParticipant, muteTrackAsAdmin }
 */
export declare const useLivekitRoom: (roomName: string, token: string) => {
    room: Room;
    participants: Participant[];
    connect: () => Promise<void>;
    chatHistory: ChatState;
    sendChatMessage: (data: {
        message: string;
        recipients?: string[];
        metadata?: string | object;
    }) => Promise<void>;
    removeParticipant: (identity: string) => void;
    muteTrackAsAdmin: (trackSid: string) => void;
    isConnecting: boolean;
    roomContext: LSRoomContext;
    isAdmin: boolean;
};
declare type LivekitContext = {
    roomName: string;
    url: string;
    token: string;
};
/**
 * subscribes to a livekit RoomEvent for the lifecycle of the component
 */
export declare const useRoomEvent: (evt: RoomEvent, listener: (...args: any[]) => void) => void;
/**
 * Updates publications / subscribed tracks arrays when track is published/subscribed
 * Also returns isSpeaking, and isLocal
 */
export declare const useParticipant: (participant: Participant) => {
    publications: TrackPublication[];
    subscribedTracks: TrackPublication[];
    isLocal: boolean;
    isSpeaking: boolean;
    connectionQuality: ConnectionQuality;
    audioTracks?: Map<string, TrackPublication>;
    videoTracks?: Map<string, TrackPublication>;
    tracks?: Map<string, TrackPublication>;
    audioLevel?: number;
    sid?: string;
    identity?: string;
    name?: string;
    metadata?: string;
    lastSpokeAt?: Date;
    permissions?: import("livekit-client/dist/proto/livekit_models").ParticipantPermission;
    addListener?: <E extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E, listener: import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E]) => Participant;
    on?: <E_1 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_1, listener: import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_1]) => Participant;
    once?: <E_2 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_2, listener: import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_2]) => Participant;
    prependListener?: <E_3 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_3, listener: import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_3]) => Participant;
    prependOnceListener?: <E_4 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_4, listener: import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_4]) => Participant;
    off?: <E_5 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_5, listener: import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_5]) => Participant;
    removeAllListeners?: <E_6 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event?: E_6) => Participant;
    removeListener?: <E_7 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_7, listener: import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_7]) => Participant;
    emit?: <E_8 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_8, ...args: Parameters<import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_8]>) => boolean;
    eventNames?: () => (string | symbol)[];
    rawListeners?: <E_9 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_9) => import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_9][];
    listeners?: <E_10 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_10) => import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks[E_10][];
    listenerCount?: <E_11 extends keyof import("livekit-client/dist/room/participant/Participant").ParticipantEventCallbacks>(event: E_11) => number;
    getMaxListeners?: () => number;
    setMaxListeners?: (maxListeners: number) => Participant;
};
/**
 * React context containing the url and roomname, which are in turn used to look up the livekit room
 */
export declare const LivekitContext: React.Context<LivekitContext>;
/**
 * Just a shortcut that uses the react context so that you don't have to look it up every time you want to use the room
 */
export declare const useCurrentRoom: () => {
    room: Room;
    participants: Participant[];
    connect: () => Promise<void>;
    chatHistory: ChatState;
    sendChatMessage: (data: {
        message: string;
        recipients?: string[];
        metadata?: string | object;
    }) => Promise<void>;
    removeParticipant: (identity: string) => void;
    muteTrackAsAdmin: (trackSid: string) => void;
    isConnecting: boolean;
    roomContext: LSRoomContext;
    isAdmin: boolean;
};
export {};
