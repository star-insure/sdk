import React from "react";
import { Tooltip } from 'react-tooltip';
import { Link, router } from "@inertiajs/react";
import { TPageHeaderAction } from "../../types";

export default function Action({ title, href, as = 'Link', target = '_self', type, onClick = () => {}, shortcutKey }: TPageHeaderAction) {
    const className =
        'bg-white rounded-full font-bold px-4 py-1.5 text-sm whitespace-nowrap hover:bg-gray-100 hover:border-gray-400 transition-colors border border-gray-300';

    const tooltipId = `action-${title}`;
    const tooltipContent = shortcutKey ? `Ctrl + ${shortcutKey}` : undefined;

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

            // Check if the focus is on an input element or inside a form
            const isInInput = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement;
            const isInForm = (e.target instanceof Element && e.target.closest('form'));

            if (isCtrlOrCmdPressed && !isInInput && !isInForm && e.key === shortcutKey) {
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
            <>
                {tooltipContent && <Tooltip id={tooltipId} className="z-10" />}
                <Link data-tooltip-id={tooltipId} data-tooltip-content={tooltipContent} className={className} href={href} onClick={() => onClick()}>
                    {title}
                </Link>
            </>
        );
    }

    if (as === 'a' && href) {
        return (
            <>
                {tooltipContent && <Tooltip id={tooltipId} className="z-10" />}
                <a data-tooltip-id={tooltipId} data-tooltip-content={tooltipContent} className={className} target={target} href={href} onClick={() => onClick()}>
                    {title}
                </a>
            </>
        );
    }

    return (
        <>
            {tooltipContent && <Tooltip id={tooltipId} className="z-10" />}
            <button data-tooltip-id={tooltipId} data-tooltip-content={tooltipContent} className={className} type={type} onClick={() => onClick()}>
                {title}
            </button>
        </>
    );
}
