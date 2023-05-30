import React from 'react';
import cn from 'classnames';

interface Props extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
    children: React.ReactNode;
    className?: string;
    condensed?: true;
}

export default function TableCell({ children, className, condensed, ...props }: Props) {
    return (
        <td {...props} className={cn(className, 'px-3 py-3 text-sm text-gray-500', {
            'w-0 whitespace-nowrap': condensed,
        })}>
            {children}
        </td>
    )
}
