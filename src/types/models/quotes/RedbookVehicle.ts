export interface RedbookVehicle {
    id: number;
    body_type: string | null;
    colour: string | null;
    condition: string | null;
    created_at: string | null;
    description: string | null;
    engine_number: string | null;
    imported: boolean | null;
    make: string | null;
    model: string | null;
    odometer_read_at: string | null;
    odometer_reading: string | null;
    odometer_reading_source: string | null;
    redbook_code: string | null;
    registration: string | null;
    sub_model: string | null;
    updated_at: string | null;
    value: number | null;
    vehicle_type: string | null;
    vin: string | null;
    weight: number | null;
    year: number | null;
}
