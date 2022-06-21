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
