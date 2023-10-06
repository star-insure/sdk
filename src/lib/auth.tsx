import { usePage } from '@inertiajs/react';
import type { AuthContext } from '../types';
import type { ErrorBag, Errors, Page, PageProps } from '@inertiajs/core';

interface SharedProps {
    auth: AuthContext;
    errors: Errors & ErrorBag;
}

interface AppPage extends Page {
    props: PageProps & SharedProps;
}

export function useAuth(): AuthContext {
    const { props } = usePage() as AppPage;

    /**
     * Check if the user has permission to perform the given ability.
     */
    function can(ability: string): boolean {
        return props.auth.permissions.includes(ability);
    }

    return {
        ...props.auth,
        can,
    };
}
