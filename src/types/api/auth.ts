export type UserContext =
    | 'administrator'
    | 'staff'
    | 'broker'
    | 'dealer'
    | 'agent'
    | 'security'
    | 'auditor'
    | 'customer';

type AuthUser = {
    id: number;
    name: string;
    email: string;
    is_group_admin: boolean;
    umbrella_filter?: string;
    oracle_user_id?: string;
    groups: AuthGroup[];
    mobile?: string;
    phone_extension?: number;
    two_factor_expires_at?: string;
    two_factor_method?: TwoFactorAuthMethod;
};

type AuthGroup = {
    id: number;
    name: string;
    code: string;
    role: AuthRole;
};

type AuthRole = {
    name: string;
    context: UserContext;
};

export interface AuthContext {
    user?: AuthUser;
    context: UserContext;
    group?: AuthGroup;
    permissions: string[];
    is_app?: boolean;
    can: (permission: string) => boolean;
    should_two_factor_auth: boolean;
}

export type TwoFactorAuthMethod = 'email' | 'sms';
