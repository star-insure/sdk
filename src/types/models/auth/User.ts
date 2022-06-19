import { Group } from ".";

export interface User {
    id: number;
    name: string;
    email: string;
    mobile?: string;
    direct_dial?: string;
    position?: string;
    group_admin?: boolean;
    umbrella_filter?: string;
    groups?: Group[];
}
