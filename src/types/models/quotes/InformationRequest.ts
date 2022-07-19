import { User } from "../auth";

export type InformationRequestStatus = 'open' | 'closed';

export interface InformationRequest {
    id: string;
    created_at: string;
    updated_at: string;
    user_id: number | null;
    quote_request_id: string;
    subject: string;
    status: InformationRequestStatus;
    messages?: InformationRequestMessage[];
    user?: User;
}

export interface InformationRequestMessage {
    id: number;
    created_at: string;
    updated_at: string;
    quote_information_request_id: string;
    user_id: number | null;
    content: string;
    has_been_read_by_customer: boolean;
    user?: User;
}

export interface InformationRequestAttachment {
    id: number;
    created_at: string;
    updated_at: string;
    quote_information_request_message_id: string;
    title: string;
    url: string;
    disk: string | null;
}
