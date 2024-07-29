export type FormStatus = 'idle' | 'processing' | 'success' | 'error';

export interface Toast {
    _id?: string;
    message: string;
    status?: 'success' | 'error' | 'default' | 'warning';
    timeout?: number;
}

export interface FilterOption {
    label: string;
    name: string;
    options?: FilterValue[];
    type?: 'options' | 'date' | 'greaterThan' | 'scope' | 'select' | 'datalist' | 'column' | 'text';
}

export interface FilterValue {
    label: string;
    value: string | number;
}

export interface Filter {
    [key: string]: (string | number)[];
}

export type TPageHeaderAction = {
    title: string;
    as?: 'button' | 'a' | 'Link';
    href?: string;
    target?: '_self' | '_blank';
    onClick?: Function;
    type?: 'button' | 'submit';
    hidden?: boolean;
    shortcutKey?: string;
};

export type Environment = 'production' | 'staging' | 'testing' | 'local';

export type Breadcrumb = {
    current?: boolean;
    title: string;
    url?: string;
};
