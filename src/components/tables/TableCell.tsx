import React from 'react';
import cn from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string;
    condensed?: true;
}

export default function TableCell({ children, className, condensed }: Props) {
    return (
        <td className={cn(className, 'px-3 py-3 text-sm text-gray-500', {
            'w-0 whitespace-nowrap': condensed,
        })}>
            {children}
        </td>
    )
}
