import { QuoteRequestPurchaseOption } from "./QuoteRequestPurchaseOption";

export interface PolicyEnhancement {
    id?: number;
    name?: string;
    description?: string;
    premium?: number;
    disable_rounding?: boolean;
    auto_select?: boolean;
    purchase_option_id?: QuoteRequestPurchaseOption['id'];
}
