export interface QuoteRequestReferrer {
    id: number;
    name: string;
    category_id: QuoteRequestReferrerCategory['id'];
    category?: QuoteRequestReferrerCategory;
}
