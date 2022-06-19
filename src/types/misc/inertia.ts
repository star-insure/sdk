import type { ErrorBag, Errors, Page, PageProps as PagePropsInterface } from "@inertiajs/inertia";
import { AuthContext } from '../..';

export interface PageProps extends Page<PagePropsInterface> {
    props: {
        auth: AuthContext;
        errors: Errors & ErrorBag;
    }
}
