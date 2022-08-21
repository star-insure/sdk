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
    valuation_details: Valuation[] | null;
    chassis_number: string | null;
    fuel_type: string | null;
    previous_registered_country: string | null;
    overseas_first_registered_year: number | null;
    overseas_first_registered_month: number | null;
}

export interface Valuation {
    matchedRedbookVehicle: MatchedRedbookVehicle;
    valuationDetail: ValuationDetail;
};

export interface MatchedRedbookVehicle {
    make?: string;
    model?: string;
    year?: number;
    description?: string;
    redbookCode: string;
}

export interface ValuationDetail {
    newRetailValue: number;
    targetConditionTypeAvailable: boolean;
    newValueAvailable: boolean;
    pricingBandAvailable: boolean;
    retailValueList: RetailValueList[];
}

export interface RetailValueList {
    condition: string;
    lowerPricingRange: number;
    upperPricingRange: number;
    value: number;
    kilometers: number;
}
