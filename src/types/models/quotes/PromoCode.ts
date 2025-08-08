import { Group, User } from "../auth";
import { QuoteRequestReferrer } from "./QuoteRequestReferrer";
import { QuoteRequestReferrerCategory } from "./QuoteRequestReferrerCategory";

export interface PromoCode {
    id?: number;
    created_at?: string;
    updated_at?: string;
    code?: string;
    user_id?: number;
    group_id?: number;
    referrer_id?: number;
    referrer_category_id?: number;
    advisor_type?: 'agent' | 'broker';
    user?: User;
    group?: Group;
    referrer?: QuoteRequestReferrer;
    category?: QuoteRequestReferrerCategory;
    vehicle_club_id?: number;
}
