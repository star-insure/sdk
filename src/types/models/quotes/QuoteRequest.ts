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
    reference: string;
    client_number: string;
    first_name: string;
    last_name: string;
    phone: string;
    mobile: string;
    email: string;
    license: string;
    license_other: string | null;
    has_automatch: boolean;
    automatch_by: QuoteRequestAutomatch;
    automatch_client_id: string | null;
    promo_code: string | null;
    club_membership_number: string;
    broker_fee: number;
    length_of_insurance: string | null;
    theme: string | null;

    // Dates
    created_at: string;
    updated_at: string;
    dob: string;
    sold_at: string | null;
    sent_at: string | null;
    pricing_expires_at: string | null;
    follow_up_at: string | null;

    // Foreign keys
    status_id: QuoteRequestStatus;
    source_id: QuoteRequestSource;
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
    status?: QuoteRequestStatus;
    source?: QuoteRequestSource;
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
}

export interface QuoteRequestReferrer {
    id: number;
    name: string;
    category_id: QuoteRequestReferrerCategory['id'];
    category?: QuoteRequestReferrerCategory;
}

export interface QuoteRequestReferrerCategory {
    id: number;
    name: string;
}

export interface Club {
    id: number;
    name: string;
}

export interface StreetAddress {
    id: number;
    address: string | null;
    unit: string | null;
    suburb: string | null;
    city: string | null;
    post_code: string | null;
}

export interface PostalAddress {
    id: number;
    postal_line_1: string | null;
    postal_line_2: string | null;
    postal_line_3: string | null;
    postal_line_4: string | null;
}

export interface Lead {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    status: string;
    source: string;
    postal_address_id: PostalAddress['id'];
    current_insurer: string | null;
    current_insurance_expires_at: string | null;
    current_insurance_is_monthly: boolean;
    vehicle_details: string | null;
    notes: string | null;
    import_data: string | null;
}

export interface QuoteRequestDeclaration {
    id: number;
    quote_request_id: QuoteRequest['id'];
    had_incident: boolean;
    has_demerit_points: boolean;
    demerit_points: string | null;
    has_lost_license: boolean;
    lost_license_details: string | null;
    was_refused_insurance: boolean;
    refused_insurance_details: string | null;
    has_criminal_conviction: boolean;
    criminal_conviction_details: string | null;
    has_vehicle_modifications: boolean;
    vehicle_modifications_details: string | null;
    has_previous_insurer: boolean;
    previous_insurer_details: string | null;
    previous_insurer_expires_at: string | null;
    additional_details: string | null;
}
