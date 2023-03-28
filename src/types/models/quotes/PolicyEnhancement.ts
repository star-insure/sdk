import { QuoteRequestPurchaseOption } from "./QuoteRequestPurchaseOption";

export interface PolicyEnhancement {
    id?: number;
    name?: string;
    description?: string;
    premium?: number;
    monthly_premium?: number;
    disable_rounding?: boolean;
    auto_select?: boolean;
    sold_at?: string;
    purchase_option_id?: QuoteRequestPurchaseOption['id'];
    key?: string;
}
