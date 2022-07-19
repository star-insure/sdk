export type InformationRequestStatus = 'open' | 'closed';

export interface InformationRequest {
    id: string;
    user_id: number | null;
    quote_request_id: string;
    subject: string;
    status: InformationRequestStatus;
    messages?: InformationRequestMessage[];
}

export interface InformationRequestMessage {
    id: number;
    quote_information_request_id: string;
    user_id: number | null;
    content: string;
    has_been_read_by_customer: boolean;
}

export interface InformationRequestAttachment {
    id: number;
    quote_information_request_message_id: string;
    title: string;
    url: string;
    disk: string | null;
}
