import { Club } from "./Club";
import { Lead } from "./Lead";
import { PostalAddress } from "./PostalAddress";
import { QuoteRequestDeclaration } from "./QuoteRequestDeclaration";
import { QuoteRequestPurchaseOption } from "./QuoteRequestPurchaseOption";
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
    vehicles?: QuoteRequestVehicle[];
    purchase_options?: QuoteRequestPurchaseOption[];
}
