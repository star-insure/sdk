import { Group } from ".";

export interface User {
    id: number;
    oracle_user_id?: string;
    name: string;
    email: string;
    mobile?: string;
    direct_dial?: string;
    position?: string;
    is_group_admin?: boolean;
    umbrella_filter?: string;
    groups?: Group[];
}
