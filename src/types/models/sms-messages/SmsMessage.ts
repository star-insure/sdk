import { User } from "../auth";
import { QuoteRequest } from "../quotes";
import { SmsMessageReply } from "./SmsMessageReply";

export interface SmsMessage {
    id: number;
    created_at: string;
    updated_at: string;
    content: string;
    recipients: string;
    reference: string | null;
    reply_to: string | null;
    user_id: number | null;
    quote_request_id: string | null;
    is_archived: boolean;
    replies?: SmsMessageReply[];
    quote_request?: QuoteRequest;
    user?: User;
}
