export interface PolicyBenefit {
    id?: number;
    name?: string;
    description?: string;
    sort_order?: number;
    icon?: string;
    auto_select?: boolean;
    template_id?: PolicyBenefitTemplate['id'];
}

export interface PolicyBenefitTemplate {
    id?: number;
    created_at?: string;
    updated_at?: string;
    name?: string;
    sort_order?: number;
}
