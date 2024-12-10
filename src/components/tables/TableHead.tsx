import React from 'react';
import cn from 'classnames';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}

export default function TableHead({ children, className, ...props }: Props) {
    return (
        <thead {...props} className={cn(className, 'px-3 py-4 text-sm text-white bg-primary')}>
            {children}
        </thead>
    )
}
