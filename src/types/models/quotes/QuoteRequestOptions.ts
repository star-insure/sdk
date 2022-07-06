export interface QuoteRequestOptions {
    club_options: SimpleOption[];
    driver_licence_options: SimpleOption[];
    incident_options: SimpleOption[];
    insurance_companies: SimpleOption[];
    level_of_insurance_options: SimpleOption[];
    policy_description_options: SimpleOption[];
    referrer_category_options: SimpleOption[];
    relationship_options: SimpleOption[];
    storage_location_options: SimpleOption[];
    vehicle_usage_options: SimpleOption[];
    policy_benefit_template_options: SimpleOption[];
    referrer_options: {
        id: number;
        name: string;
        category_id: number;
    };
    policy_benefit_options: {
        id: number;
        name: string;
        description: string;
        auto_select: boolean;
        template_id: number;
        sort_order: number;
    };
    policy_enhancement_options: {
        id: number;
        title: string;
        description: string;
        premium: number;
        monthly_premium: number;
        disable_rounding: boolean;
        auto_select: boolean;
    };
}

interface SimpleOption {
    id: number;
    name: string;
}