import { Permission } from ".";

export interface Role {
    id: number;
    name: string;
    permissions?: Permission[];
}
