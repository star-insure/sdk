export interface QuoteRequestVehicleDriver {
    id?: number;
    first_name?: string | null;
    last_name?: string | null;
    dob?: string | null;
    relationship?: string | null;
    licence?: string | null;
    licence_other?: string | null;
    quote_request_vehicle_id?: number;
}
