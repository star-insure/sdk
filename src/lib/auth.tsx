import { usePage } from '@inertiajs/inertia-react';
import type { AuthContext, PageProps } from '../types';

export function useAuth(): AuthContext {
    const { props } = usePage<PageProps>() as PageProps;

    return props.auth;
}
