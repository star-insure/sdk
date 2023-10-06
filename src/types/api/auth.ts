import { User, Group } from '../models';

export type UserContext =
  | 'staff'
  | 'broker'
  | 'agent'
  | 'security'
  | 'customer';

export interface AuthContext {
  user?: User;
  context?: UserContext;
  group?: Group;
  permissions: string[];
  is_app?: boolean;
  can: (permission: string) => boolean;
}
