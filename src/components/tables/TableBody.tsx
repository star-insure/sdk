import cn from 'classnames';
import React from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}

export default function TableBody({ children, className, ...props }: Props) {
    return (
        <tbody {...props} className={cn(className, 'divide-y divide-gray-200 bg-white')}>
            {children}
        </tbody>
    )
}
