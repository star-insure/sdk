export * from './auth';
export * from './enums';
export * from './responses';

export interface ApiResponse<T = any> {
    data: T;
    meta: Meta;
    links: Links;
    status: number;
    ok: boolean;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Links {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}
