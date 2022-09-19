import { User } from "../auth";

export interface BlacklistEntry {
    id?: number;
    created_at?: string;
    name?: string;
    description?: string;
    profiles?: BlacklistEntryProfile[];
    user_id?: number;
    user?: User;
}

export interface BlacklistEntryProfile {
    id?: number;
    created_at?: string;
    email?: string;
    client_number?: string;
    phone?: string;
    mobile?: string;
    registration?: string;
    blacklist_entry_id: BlacklistEntry['id'];
}
