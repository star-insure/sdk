import { Permission } from ".";
import { UserContext } from "../../api";

export interface Role {
    id: number;
    name: string;
    context: UserContext;
    permissions?: Permission[];
}
