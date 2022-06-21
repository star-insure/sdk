export interface QuoteRequestVehicleDriver {
    id: number;
    first_name: string;
    last_name: string;
    dob: string | null;
    relationship: string | null;
    licence: string | null;
    licence_other: string | null;
    quote_request_vehicle_id: number;
}
