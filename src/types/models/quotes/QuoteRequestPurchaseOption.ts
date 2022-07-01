export interface QuoteRequestPurchaseOption {
    id: number;
    quote_request_id: string;
    level_of_insurance_id: number | null;
    sort_order: number | null;
    description: string | null;
    base_premium: number | null;
    premium: number | null;
    monthly_premium: number | null;
    show_monthly: boolean | null;
    fsl: number | null;
    gst: number | null;
    premium_type: PremiumType | null;
    policy_starts_at: string | null | null;
    sold_at: string | null | null;
    is_paid: boolean | null;
    payment_frequency: PaymentFrequency | null;
}

export type PremiumType = 'annual' | 'total-due';

export type PaymentFrequency = 'monthly' | 'annually';
