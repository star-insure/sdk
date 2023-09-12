import { QuoteRequestReferrerCategory } from "./QuoteRequestReferrerCategory";

export interface QuoteRequestReferrer {
    id: number;
    name: string;
    category_id: QuoteRequestReferrerCategory['id'];
    category?: QuoteRequestReferrerCategory;
    key?: string;
    is_public: boolean;
}
