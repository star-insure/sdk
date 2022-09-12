import { User, Group } from "../models";

export type UserContext = 'administrator' | 'staff' | 'broker' | 'agent';

export interface AuthContext {
    user?: User;
    context?: UserContext;
    group?: Group;
    permissions: string[];
    is_app?: boolean;
}
