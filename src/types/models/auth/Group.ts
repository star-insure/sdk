import { Role, Permission, User } from ".";

export interface Group {
    id: number;
    name: string;
    code: string;
    'x_code': string;
    role?: Role;
    permissions?: Permission[];
    users?: User[];
}
