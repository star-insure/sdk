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
