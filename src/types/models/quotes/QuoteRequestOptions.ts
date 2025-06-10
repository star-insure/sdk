import { VehicleType } from "../../api";

export interface QuoteRequestOptions {
    club_options: SimpleOption[];
    driver_licence_options: SimpleOption[];
    incident_options: SimpleOption[];
    insurance_companies: SimpleOption[];
    level_of_insurance_options: SimpleOption[];
    policy_description_options: SimpleOption[];
    referrer_category_options: (SimpleOption & { 
        is_public: boolean
    })[];
    relationship_options: SimpleOption[];
    storage_location_options: SimpleOption[];
    vehicle_usage_options: {
        id: number;
        name: string;
        vehicle_type: VehicleType;
    }[];
    policy_benefit_template_options: SimpleOption[];
    referrer_options: {
        id: number;
        name: string;
        category_id: number;
        is_public: boolean;
    }[];
    policy_benefit_options: {
        id: number;
        name: string;
        description: string;
        auto_select: boolean;
        template_id: number;
        sort_order: number;
    }[];
    policy_enhancement_options: {
        id: number;
        name: string;
        description: string;
        premium: number;
        disable_rounding: boolean;
        auto_select: boolean;
    }[];
    authorised_drivers_options: {
        id: number;
        name: string;
        description: string;
    }[];
    terms_options: {
        id: number;
        name: string;
        description: string;
    }[];
    excess_options: {
        id: number;
        name: string;
        description: string;
    }[];
    vehicle_flags: SimpleOption[];
    town_flags: SimpleOption[];
}

interface SimpleOption {
    id: number;
    name: string;
}
