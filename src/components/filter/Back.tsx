import { Link } from "@inertiajs/react";
import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { usePage } from "../../lib/page";
import cn from 'classnames';

export function BackButton({ back, className }: { back?: string | boolean; className?: string; }) {
    const [backUrl, setBackUrl] = React.useState<string | undefined>(typeof back === 'string' ? back : undefined);
    const { breadcrumbs } = usePage().props;

    /**
     * Set the back URL on mount
     */
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!breadcrumbs) return;
            // Set back button URL
            if (back && typeof back === 'boolean') {
                // If we haven't provided a path as a prop, use the last breadcrumb that's not the current one
                const crumb = breadcrumbs.slice(breadcrumbs.length - 2, breadcrumbs.length - 1);
                if (crumb && crumb.length === 1) {
                    // Strip off everything but the path so the <Link> component works
                    const url = crumb[0].url;
                    if (url) {
                        setBackUrl(new URL(url).pathname);
                    }
                }
            }
        }
    }, [breadcrumbs]);

    return (
        <Link href={backUrl || '/'} className={cn(className, 'flex items-center justify-center text-back-button-text hover:text-primary transition-all')}>
            <HiArrowLeft className="h-5 w-5 stroke-[1.25]" />
        </Link>
    );
}