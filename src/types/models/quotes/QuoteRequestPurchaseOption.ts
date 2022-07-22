import { PolicyBenefit } from "./PolicyBenefit";
import { PolicyEnhancement } from "./PolicyEnhancement";

export interface QuoteRequestPurchaseOption {
    id: number;
    quote_request_id: string;
    level_of_insurance_id: number | null;
    sort_order: number | null;
    description: string | null;
    premium: number | null;
    monthly_premium: number | null;
    show_monthly: boolean | null;
    fsl: number | null;
    gst: number | null;
    premium_type: PremiumType | null;
    policy_starts_at: string | null;
    sold_at: string | null;
    is_paid: boolean | null;
    payment_frequency: PaymentFrequency | null;
    excess_details: string | null;
    terms: string | null;
    authorised_drivers: string | null;
    draft: boolean | null;
    benefit_template_id: number | null;

    // Relationships
    level_of_insurance?: LevelOfInsurance;
    enhancements?: PolicyEnhancement[];
    benefits?: PolicyBenefit[];
}

export type PremiumType = 'annual' | 'total-due';

export type PaymentFrequency = 'monthly' | 'annually';

export interface LevelOfInsurance {
    id: number;
    name: string;
}
