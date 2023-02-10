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

    return props.auth;
}
