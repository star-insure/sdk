import { PolicyBenefit, PolicyBenefitTemplate } from "./PolicyBenefit";
import { PolicyEnhancement } from "./PolicyEnhancement";

export interface QuoteRequestPurchaseOption {
    id?: number;
    quote_request_id?: string;
    level_of_insurance_id?: number;
    sort_order?: number;
    description?: string;
    premium?: number;
    monthly_premium?: number;
    purchased_total?: number;
    show_monthly?: boolean;
    fsl?: number;
    gst?: number;
    premium_type?: PremiumType;
    policy_starts_at?: string;
    sold_at?: string;
    is_paid?: boolean;
    payment_frequency?: PaymentFrequency;
    excess_details?: string;
    terms?: string;
    authorised_drivers?: string;
    is_draft?: boolean;
    is_direct_debit?: boolean;
    benefit_template_id?: number;

    // Relationships
    level_of_insurance?: LevelOfInsurance;
    enhancements?: PolicyEnhancement[];
    benefits?: PolicyBenefit[];
    benefit_template?: PolicyBenefitTemplate;

    key?: string;
}

export type PremiumType = 'annual' | 'total-due';

export type PaymentFrequency = 'monthly' | 'annually';

export interface LevelOfInsurance {
    id: number;
    name: string;
}
