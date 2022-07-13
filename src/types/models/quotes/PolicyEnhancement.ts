import { PremiumType, QuoteRequestPurchaseOption } from "./QuoteRequestPurchaseOption";

export interface PolicyEnhancement {
    id: number;
    title: string | null;
    description: string | null;
    premium: number | null;
    monthly_premium: number | null;
    disable_rounding: boolean | null;
    auto_select: boolean | null;
    show_monthly: boolean | null;
    premium_type: PremiumType | null;
    purchase_option_id: QuoteRequestPurchaseOption['id'] | null;
}
