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
    type?: 'options' | 'date' | 'greaterThan' | 'scope' | 'select' | 'datalist' | 'column' | 'text' | 'range';
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
    backgroundColor?: string;
    textColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    actions?: TPageHeaderInnerAction[];
};

export type TPageHeaderInnerAction = {
    title: string;
    as?: 'button' | 'a' | 'Link';
    href?: string;
    target?: '_self' | '_blank';
    onClick?: Function;
    hidden?: boolean;
};

export type Environment = 'production' | 'staging' | 'testing' | 'local';

export type Breadcrumb = {
    current?: boolean;
    title: string;
    url?: string;
};

// Basic types that can be directly converted to FormData
type FormDataPrimitive = string | number | boolean | null | undefined | File | Blob | Date;

type FormDataArray = FormDataConvertible[];

// Type to handle nested objects
type FormDataObject = { [key: string]: FormDataConvertible };

// Union of all possible types that can be converted to FormData
type FormDataConvertible = FormDataPrimitive | FormDataArray | FormDataObject;

// Helper type to make any type compatible with FormData used in the Inertia JS `useForm()` function
export type FormDataCompatible<T> = T extends FormDataConvertible
    ? T
    : T extends object
      ? {
            [K in keyof T]: T[K] extends (infer U)[] ? FormDataCompatible<U>[] : FormDataCompatible<T[K]>;
        }
      : FormDataConvertible;
