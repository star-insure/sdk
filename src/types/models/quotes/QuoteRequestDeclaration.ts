import { QuoteRequest } from "./QuoteRequest";
import { QuoteRequestIncident } from "./QuoteRequestIncident";

export interface QuoteRequestDeclaration {
    id?: number;
    quote_request_id?: QuoteRequest['id'];
    had_incident?: boolean;
    incidents?: QuoteRequestIncident[];
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
