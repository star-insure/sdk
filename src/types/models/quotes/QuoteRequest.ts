import { BlacklistEntry } from "./Blacklist";
import { Club } from "./Club";
import { InformationRequest } from "./InformationRequest";
import { Lead } from "./Lead";
import { PostalAddress } from "./PostalAddress";
import { QuoteRequestDeclaration } from "./QuoteRequestDeclaration";
import { QuoteRequestLog } from "./QuoteRequestLog";
import { QuoteRequestPurchaseOption } from "./QuoteRequestPurchaseOption";
import { QuoteRequestReferrer } from "./QuoteRequestReferrer";
import { QuoteRequestReferrerCategory } from "./QuoteRequestReferrerCategory";
import { QuoteRequestVehicle } from "./QuoteRequestVehicle";
import { StreetAddress } from "./StreetAddress";

export type QuoteRequestStatus = 'new' | 'draft' | 'in-progress' | 'with-customer' | 'sold' | 'bound' | 'customer-modified' | 'closed';

export type QuoteRequestSource = 'web' | 'phone' | 'show' | 'existing-customer' | 'mighway' | 'agent' | 'broker' |  'entry-form' | 'bularangi';

export type QuoteRequestAutomatch = 'quote' | 'email' | 'registration' | 'duplicate';

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
    id?: string;
    status?: QuoteRequestStatus;
    source?: QuoteRequestSource;
    reference?: string;
    client_number?: string;
    policy_number?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    licence?: string;
    licence_other?: string;
    has_automatch?: boolean;
    automatch_by?: QuoteRequestAutomatch;
    automatch_registrations?: string;
    promo_code?: string;
    club_membership_number?: string;
    broker_fee?: number;
    length_of_insurance?: string;
    theme?: string;
    notes?: string;

    // Dates
    created_at?: string;
    updated_at?: string;
    dob?: string;
    sold_at?: string;
    sent_at?: string;
    pricing_expires_at?: string;
    max_policy_starts_at?: string;
    follow_up_at?: string;

    // Foreign keys
    resubmit_id?: QuoteRequest['id'];
    referrer_id?: QuoteRequestReferrer['id'];
    referrer_category_id?: QuoteRequestReferrerCategory['id'];
    staff_member_id?: QuoteRequestUser['id'];
    agent_id?: QuoteRequestUser['id'];
    agent_firm_id?: QuoteRequestUserGroup['id'];
    broker_firm_id?: QuoteRequestUserGroup['id'];
    broker_id?: QuoteRequestUser['id'];
    club_id?: Club['id'];
    lead_id?: Lead['id'];
    blacklist_entry_id?: BlacklistEntry['id'];

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
    information_requests?: InformationRequest[];
    links?: {
        purchase: string;
        purchase_preview: string;
        purchase_options_pdf: string;
        documentation_pdf: string;
    },
    blacklist_entry?: BlacklistEntry;

    is_follow_up_required: boolean;
}
