import { QuoteRequest } from "./QuoteRequest";
import { QuoteRequestIncident } from "./QuoteRequestForm";
export interface QuoteRequestDeclaration {
    id: number;
    quote_request_id: QuoteRequest['id'] | null;
    had_incident: boolean | null;
    incidents: QuoteRequestIncident[] | null;
    has_demerit_points: boolean | null;
    demerit_points: string | null;
    has_lost_license: boolean | null;
    lost_license_details: string | null;
    was_refused_insurance: boolean | null;
    refused_insurance_details: string | null;
    has_criminal_conviction: boolean | null;
    criminal_conviction_details: string | null;
    has_vehicle_modifications: boolean | null;
    vehicle_modifications_details: string | null;
    has_previous_insurer: boolean | null;
    previous_insurer_details: string | null;
    previous_insurer_expires_at: string | null;
    additional_details: string | null;
}
