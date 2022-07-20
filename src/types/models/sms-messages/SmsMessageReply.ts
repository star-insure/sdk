import { SmsMessage } from "./SmsMessage";

export interface SmsMessageReply {
    id: number;
    created_at: string;
    updated_at: string;
    content: string;
    phone_number: string;
    sms_message_id: number;
    message?: SmsMessage;
}
