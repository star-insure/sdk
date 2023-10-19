export type UserContext =
  | 'administrator'
  | 'staff'
  | 'broker'
  | 'agent'
  | 'security'
  | 'customer';

type AuthUser = {
  id: number;
  name: string;
  email: string;
  is_group_admin: boolean;
  umbrella_filter?: string;
  oracle_user_id?: string;
  groups: AuthGroup[];
};

type AuthGroup = {
  id: number;
  name: string;
  code: string;
  role: AuthRole;
};

type AuthRole = {
  name: string;
  context: string;
};

export interface AuthContext {
  user?: AuthUser;
  context: UserContext;
  group?: AuthGroup;
  permissions: string[];
  is_app?: boolean;
  can: (permission: string) => boolean;
}
