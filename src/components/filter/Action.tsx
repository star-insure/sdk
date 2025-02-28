import React from "react";
import { Tooltip } from 'react-tooltip';
import { Link, router } from "@inertiajs/react";
import { TPageHeaderAction } from "../../types";
import {useClickOutside} from "../../lib";
import { default as cn } from 'classnames';

export default function Action({ title, href, as = 'Link', target = '_self', type, onClick = () => {}, shortcutKey, backgroundColor, hoverBackgroundColor, textColor, hoverTextColor, actions }: TPageHeaderAction) {
    const className = cn('rounded-full font-bold px-4 py-1.5 text-sm whitespace-nowrap hover:border-gray-400 transition-colors border border-gray-300', {
        'bg-white': !backgroundColor,
        [`bg-${backgroundColor}`]: !!backgroundColor,
        [`text-${textColor}`]: !!textColor,
        'hover:bg-gray-100': !hoverBackgroundColor,
        [`hover:bg-${hoverBackgroundColor}`]: !!hoverBackgroundColor,
    });

    const tooltipId = `action-${title}`;
    const tooltipContent = shortcutKey ? `Ctrl + ${shortcutKey}` : undefined;

    const actionButtonRef = React.useRef(null);
    const isActionsButton = actions && actions.length > 0;
    const actionsButtonClassName = 'relative cursor-pointer ' + className;
    const [isInnerActionVisible, setIsInnerActionVisible] = React.useState(false);

    const toggleActionsMenu = () => {
        setIsInnerActionVisible(!isInnerActionVisible);
    };

    useClickOutside(actionButtonRef, () => setIsInnerActionVisible(false));

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

    if (isActionsButton) {
        return (
            <>
                {tooltipContent && <Tooltip id={tooltipId} className="z-10" />}
                <div
                    ref={actionButtonRef}
                    data-tooltip-id={tooltipId}
                    data-tooltip-content={tooltipContent}
                    className={actionsButtonClassName}
                    onClick={toggleActionsMenu}>
                        {title}
                        {isInnerActionVisible && (
                            <div className="absolute top-[120%] right-[-20%] z-10">
                                <div className="flex flex-col gap-2 bg-white rounded-lg shadow-xl p-3">
                                    {actions && actions.map((action, index) => {
                                        if (action.hidden) return null;

                                        return (
                                            <Action
                                                key={index}
                                                title={action.title}
                                                as={action.as}
                                                href={action.href}
                                                target={action.target}
                                                onClick={action.onClick}
                                                type={'button'}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                </div>
            </>
        );
    }

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
