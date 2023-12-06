import React from "react";
import { Link, router } from "@inertiajs/react";
import { TPageHeaderAction } from "../../types";

export default function Action({ title, href, as = 'Link', target = '_self', type, onClick = () => {}, shortcutKey }: TPageHeaderAction) {
    const className =
        'bg-white rounded-full font-bold px-4 py-1.5 text-sm whitespace-nowrap hover:bg-gray-100 hover:border-gray-400 transition-colors border border-gray-300';

    function runAction() {
        if (as === 'Link' && href) {
            return router.get(href);
        }

        if (as === 'a' && href) {
            return window.location.href = href;
        }

        onClick();
    };

    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!shortcutKey) return;

        const listener = (e: KeyboardEvent) => {
            // Check if Ctrl (Windows) or Cmd (Mac) key is pressed
            const isCtrlOrCmdPressed = (e.ctrlKey || e.metaKey);

            if (e.key === shortcutKey && isCtrlOrCmdPressed) {
                e.preventDefault();
                runAction();
            }
        };

        window.addEventListener('keydown', listener);

        return () => {
            window.removeEventListener('keydown', listener);
        };
    }, [shortcutKey]);

    if (as === 'Link' && href) {
        return (
            <Link className={className} href={href} onClick={() => onClick()}>
                {title}
            </Link>
        );
    }

    if (as === 'a' && href) {
        return (
            <a className={className} target={target} href={href} onClick={() => onClick()}>
                {title}
            </a>
        );
    }

    return (
        <button className={className} type={type} onClick={() => onClick()}>
            {title}
        </button>
    );
}
