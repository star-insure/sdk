import { SmsMessage } from "./SmsMessage";

export interface SmsMessageReply {
    id: number;
    created_at: number;
    updated_at: number;
    content: string;
    phone_number: string;
    sms_message_id: number;
    message?: SmsMessage;
}
