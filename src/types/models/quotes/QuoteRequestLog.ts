import { User } from "../auth";

export interface QuoteRequestLog {
    id: number;
    created_at: string;
    quote_request_id: string;
    user_id: number | null;
    user?: User;
    activity_type: string;
}
