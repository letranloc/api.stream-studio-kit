import { Role } from '../core/types';
declare type PermissionMap = {
    [key in Role]: Permission[];
};
/**
 * A contextual repurposing of API.stream roles
 * https://www.api.stream/docs/api/auth/#permission-roles
 */
export declare enum Permission {
    ReadProject = 0,
    UpdateProject = 1,
    JoinRoom = 2,
    InviteGuests = 3,
    ManageGuests = 4,
    ManageBroadcast = 5,
    ManageSelf = 6
}
export declare const permissions: PermissionMap;
/**
 * It returns true if the role has the permission, otherwise it returns false
 * @param {Role} role - The role of the user.
 * @param {Permission} permission - The permission we want to check for.
 * @returns A function that takes in a role and permission and returns a boolean
 */
export declare const hasPermission: (role: Role, permission: Permission) => boolean;
export {};
