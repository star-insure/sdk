import { Product, VehicleType } from "../../api";
import { Club } from "./Club";
import { QuoteRequestIncident } from "./QuoteRequestIncident";
import { Lead } from "./Lead";
import { PostalAddress } from "./PostalAddress";
import { QuoteRequestDeclaration } from "./QuoteRequestDeclaration";
import { QuoteRequestLog } from "./QuoteRequestLog";
import { PaymentFrequency, PremiumType, QuoteRequestPurchaseOption } from "./QuoteRequestPurchaseOption";
import { QuoteRequestReferrer } from "./QuoteRequestReferrer";
import { QuoteRequestReferrerCategory } from "./QuoteRequestReferrerCategory";
import { QuoteRequestVehicle } from "./QuoteRequestVehicle";
import { StreetAddress } from "./StreetAddress";

export type QuoteRequestStatus = 'new' | 'draft' | 'in-progress' | 'with-customer' | 'sold' | 'bound' | 'customer-modified' | 'closed';

export type QuoteRequestSource = 'web' | 'phone' | 'show' | 'existing-customer' | 'mighway' | 'agent' | 'entry-form' | 'bularangi';

export type QuoteRequestAutomatch = 'QUOTE' | 'EMAIL' | 'REGISTRATION' | 'DUPLICATE' | null;

export interface QuoteRequestUser {
    id: number;
    name: string;
    email: string;
}

export interface QuoteRequestUserGroup {
    id: number;
    name: string;
}

export interface QuoteRequest {
    id: string;
    status: QuoteRequestStatus;
    source: QuoteRequestSource;
    reference: string;
    client_number: string;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    mobile: string | null;
    email: string | null;
    licence: string | null;
    licence_other: string | null;
    has_automatch: boolean | null;
    automatch_by: QuoteRequestAutomatch;
    automatch_client_id: string | null;
    promo_code: string | null;
    club_membership_number: string | null;
    broker_fee: number | null;
    length_of_insurance: string | null;
    theme: string | null;

    // Dates
    created_at: string;
    updated_at: string;
    dob: string | null;
    sold_at: string | null;
    sent_at: string | null;
    pricing_expires_at: string | null;
    follow_up_at: string | null;

    // Foreign keys
    resubmit_id: QuoteRequest['id'] | null;
    referrer_id: QuoteRequestReferrer['id'] | null;
    referrer_category_id: QuoteRequestReferrerCategory['id'] | null;
    staff_member_id: QuoteRequestUser['id'] | null;
    agent_id: QuoteRequestUser['id'] | null;
    agent_firm_id: QuoteRequestUserGroup['id'] | null;
    broker_firm_id: QuoteRequestUserGroup['id'] | null;
    broker_id: QuoteRequestUser['id'] | null;
    club_id: Club['id'] | null;
    lead_id: Lead['id'] | null;

    // Relationships
    declaration?: QuoteRequestDeclaration;
    street_address?: StreetAddress;
    postal_address?: PostalAddress;
    resubmit?: QuoteRequest;
    referrer?: QuoteRequestReferrer;
    referrer_category?: QuoteRequestReferrerCategory;
    staff_member?: QuoteRequestUser;
    agent?: QuoteRequestUser;
    agent_firm?: QuoteRequestUserGroup;
    broker?: QuoteRequestUser;
    broker_firm?: QuoteRequestUserGroup;
    club?: Club;
    lead?: Lead;
    vehicles?: QuoteRequestVehicle[];
    purchase_options?: QuoteRequestPurchaseOption[];
    logs?: QuoteRequestLog[];
}

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

    // Foreign keys
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

    purchaseOptions?: {
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
    },
}
