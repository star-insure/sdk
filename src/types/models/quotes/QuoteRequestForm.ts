import { Product, VehicleType } from "../../api";
import { Club } from "./Club";
import { QuoteRequestSource, QuoteRequestStatus, QuoteRequestUser, QuoteRequestUserGroup } from "./QuoteRequest";
import { PaymentFrequency, PremiumType } from "./QuoteRequestPurchaseOption";
import { QuoteRequestReferrer } from "./QuoteRequestReferrer";
import { QuoteRequestReferrerCategory } from "./QuoteRequestReferrerCategory";

export interface QuoteRequestForm {
    id?: string;
    status?: QuoteRequestStatus;
    source?: QuoteRequestSource;
    reference?: string;
    client_number?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    licence?: string;
    licence_other?: string;
    promo_code?: string;
    club_membership_number?: string;
    broker_fee?: number;
    length_of_insurance?: string;
    theme?: string;

    dob?: string;
    sold_at?: string;
    sent_at?: string;
    pricing_expires_at?: string;
    follow_up_at?: string;

    referrer_id?: QuoteRequestReferrer['id'];
    referrer_category_id?: QuoteRequestReferrerCategory['id'];
    staff_member_id?: QuoteRequestUser['id'];
    agent_id?: QuoteRequestUser['id'];
    agent_firm_id?: QuoteRequestUserGroup['id'];
    broker_firm_id?: QuoteRequestUserGroup['id'];
    broker_id?: QuoteRequestUser['id'];
    club_id?: Club['id'];

    street_address: {
        id?: number;
        address?: string;
        unit?: string;
        suburb?: string;
        city?: string;
        post_code?: string;
    },

    declaration: {
        id?: number;
        had_incident?: boolean;
        incidents: {
            year?: string;
            month?: string;
            description?: string;
        }[];
        has_demerit_points?: boolean;
        demerit_points?: string;
        has_lost_licence?: boolean;
        lost_licence_details?: string;
        was_refused_insurance?: boolean;
        refused_insurance_details?: string;
        has_criminal_conviction?: boolean;
        criminal_conviction_details?: string;
        has_vehicle_modifications?: boolean;
        vehicle_modifications_details?: string;
        has_previous_insurer?: boolean;
        previous_insurer_details?: string;
        previous_insurer_expires_at?: string;
        additional_details?: string;
    }

    vehicles: {
        id?: number;
        vehicle_type?: VehicleType;
        registration?: string;
        make?: string;
        model?: string;
        year?: string;
        usage?: string;
        product?: Product;
        has_financially_interested_party?: boolean;
        financially_interested_party_detail?: string;
        owned_duration?: string;
        value?: number;
        storage_location?: string;
        is_heavy?: boolean;
        drivers: {
            id?: number;
            first_name?: string;
            last_name?: string;
            dob?: string;
            relationship?: string;
            licence?: string;
            licence_other?: string;
        }[];
    }[],

    purchase_options: {
        id?: number;
        level_of_insurance_id?: number;
        sort_order?: number;
        description?: string;
        base_premium?: number;
        premium?: number;
        monthly_premium?: number;
        show_monthly?: boolean;
        fsl?: number;
        gst?: number;
        premium_type?: PremiumType;
        policy_starts_at?: string;
        sold_at?: string;
        is_paid?: boolean;
        payment_frequency?: PaymentFrequency;
    }[],
}
