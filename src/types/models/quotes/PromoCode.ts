import { Group } from "../auth";

export interface PromoCode {
    id?: number;
    created_at?: string;
    updated_at?: string;
    code?: string;
    user_id?: number;
    group_id?: number;
    referrer_id?: number;
    advisor_type?: 'agent' | 'broker';
    group?: Group;
}
