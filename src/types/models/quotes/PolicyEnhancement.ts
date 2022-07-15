import { QuoteRequestPurchaseOption } from "./QuoteRequestPurchaseOption";

export interface PolicyEnhancement {
    id: number;
    name: string | null;
    description: string | null;
    premium: number | null;
    disable_rounding: boolean | null;
    auto_select: boolean | null;
    purchase_option_id: QuoteRequestPurchaseOption['id'] | null;
}
