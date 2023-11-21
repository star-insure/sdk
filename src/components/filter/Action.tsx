import { Link } from "@inertiajs/react";
import { TPageHeaderAction } from "../../types";
import React from "react";

export default function Action({ title, href, as = 'Link', target = '_self', type, onClick = () => {} }: TPageHeaderAction) {
    const className =
        'bg-white rounded-full font-bold px-3 py-1.5 text-xs whitespace-nowrap hover:bg-gray-100 hover:border-gray-300 transition-colors border border-gray-200';

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
