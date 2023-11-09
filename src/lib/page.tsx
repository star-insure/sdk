import { Page, PageProps } from '@inertiajs/core';
import { usePage as inertiaUsePage } from '@inertiajs/react';
import { AuthContext, Breadcrumb, Environment } from '../types';

/**
 * Add custom props here, that are defined in `app/Http/Middleware/HandleInertiaRequests.php`
 */
type CustomPageProps = {
    env: Environment;
    breadcrumbs?: Breadcrumb[];
    links: Record<string, string>;
    access_token?: string;
    impersonate_id?: number;
    csrf_token?: string;
    auth: AuthContext;
} & PageProps;

/**
 * A wrapper around Inertia's usePage function that gives better type-safety
 */
export function usePage<T>(): Page<CustomPageProps & T> {
    // @ts-ignore
    return inertiaUsePage();
}
