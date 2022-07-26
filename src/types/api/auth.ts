import { User, Group } from "../models";

export type Audience = 'administrator' | 'staff' | 'broker' | 'agent';

export interface AuthContext {
    user?: User;
    audience?: Audience;
    group?: Group;
    permissions: string[];
    is_app?: boolean;
}
