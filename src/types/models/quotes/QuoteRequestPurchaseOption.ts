export interface QuoteRequestPurchaseOption {
    id: number;
    quote_request_id: string;
    level_of_insurance_id: number;
    sort_order: number;
    description: string;
    base_premium: number;
    premium: number;
    monthly_premium: number;
    show_monthly: boolean;
    fsl: number;
    gst: number;
    premium_type: PremiumType;
    policy_starts_at: string | null;
    sold_at: string | null;
    is_paid: boolean;
    payment_frequency: PaymentFrequency;
}

export type PremiumType = 'annual' | 'total-due';

export type PaymentFrequency = 'monthly' | 'annually';
