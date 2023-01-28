import { Compositor, SDK } from '../namespaces';
export declare type RoomParticipantSource = {
    id: string;
    value: MediaStream | MediaStreamTrack;
    props: {
        id: string;
        type: 'screen' | 'camera';
        displayName: string;
        videoEnabled: boolean;
        audioEnabled: boolean;
        mirrored: boolean;
        external: boolean;
        participantId: string;
        trackId: string;
        microphone?: SDK.Track;
    };
};
export declare const RoomParticipant: Compositor.Source.SourceDeclaration;
