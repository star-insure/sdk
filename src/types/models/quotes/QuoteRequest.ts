import { Product, VehicleType } from "../../api";
import { Club } from "./Club";
import { QuoteRequestIncident } from "./QuoteRequestForm";
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
    license: string | null;
    license_other: string | null;
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
    reference?: string | null;
    client_number?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    phone?: string | null;
    mobile?: string | null;
    email?: string | null;
    license?: string | null;
    license_other?: string | null;
    promo_code?: string | null;
    club_membership_number?: string | null;
    broker_fee?: number | null;
    length_of_insurance?: string | null;
    theme?: string | null;

    dob?: string | null;
    sold_at?: string | null;
    sent_at?: string | null;
    pricing_expires_at?: string | null;
    follow_up_at?: string | null;

    // Foreign keys
    status_id?: QuoteRequestStatus;
    source_id?: QuoteRequestSource;
    referrer_id?: QuoteRequestReferrer['id'] | null;
    referrer_category_id?: QuoteRequestReferrerCategory['id'] | null;
    staff_member_id?: QuoteRequestUser['id'] | null;
    agent_id?: QuoteRequestUser['id'] | null;
    agent_firm_id?: QuoteRequestUserGroup['id'] | null;
    broker_firm_id?: QuoteRequestUserGroup['id'] | null;
    broker_id?: QuoteRequestUser['id'] | null;
    club_id?: Club['id'] | null;

    declaration: {
        id?: number;
        had_incident?: boolean | null;
        incidents?: QuoteRequestIncident[] | null;
        has_demerit_points?: boolean | null;
        demerit_points?: string | null;
        has_lost_license?: boolean | null;
        lost_license_details?: string | null;
        was_refused_insurance?: boolean | null;
        refused_insurance_details?: string | null;
        has_criminal_conviction?: boolean | null;
        criminal_conviction_details?: string | null;
        has_vehicle_modifications?: boolean | null;
        vehicle_modifications_details?: string | null;
        has_previous_insurer?: boolean | null;
        previous_insurer_details?: string | null;
        previous_insurer_expires_at?: string | null;
        additional_details?: string | null;
    }

    vehicles: {
        id?: number;
        vehicle_type?: VehicleType | null;
        registration?: string | null;
        make?: string | null;
        model?: string | null;
        year?: string | null;
        usage?: string | null;
        product?: Product | null;
        has_financially_interested_party?: boolean | null;
        financially_interested_party_detail?: string | null;
        owned_duration?: string | null;
        value?: number | null;
        storage_location?: string | null;
        is_heavy?: boolean | null;
        drivers: {
            id?: number;
            first_name?: string;
            last_name?: string;
            dob?: string | null;
            relationship?: string | null;
            licence?: string | null;
            licence_other?: string | null;
        }[];
    }[],

    purchaseOptions?: {
        id?: number;
        level_of_insurance_id?: number | null;
        sort_order?: number | null;
        description?: string | null;
        base_premium?: number | null;
        premium?: number | null;
        monthly_premium?: number | null;
        show_monthly?: boolean | null;
        fsl?: number | null;
        gst?: number | null;
        premium_type?: PremiumType | null;
        policy_starts_at?: string | null;
        sold_at?: string | null;
        is_paid?: boolean | null;
        payment_frequency?: PaymentFrequency | null;
    },
}
