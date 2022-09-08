import { User } from "../auth";
import { QuoteRequest } from "../quotes";
import { GatewayKey } from "./Gateways";

export type PaymentStatus = 'accepted' | 'incomplete' | 'declined';
export type PaymentType = 'quote' | 'account' | 'auction';

export interface Payment {
    id: string;
    created_at: string;
    updated_at: string;
    status: PaymentStatus;
    reference: string | null;
    client_number: string | null;
    amount: number;
    processing_fee: number | null;
    surcharge_percentage: number | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    mobile: string | null;
    gateway_key: GatewayKey;
    gateway_reference: string;
    payment_type: PaymentType;
    quote_request_purchase_option_id: number | null;
    quote_request_id: string | null;
    email_sent_at: string | null;
    cardholder_name: string;
    card_name: string;
    card_number: string;
    card_expires_at: string;
    card_token: string | null;
    user_id: User['id'] | null;
    return_url: string | null;
    user?: User;
    quoteRequest?: QuoteRequest;
}
