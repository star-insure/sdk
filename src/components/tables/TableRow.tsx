import React from 'react';
import cn from 'classnames';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function TableRow({ children, className = '', onClick = () => {}, ...props }: Props) {
    const bgClass = className.includes('bg') ? '' : 'bg-white even:bg-gray-50'

    return (
        <tr {...props} className={cn(className, bgClass, 'hover:bg-gray-100')} onClick={onClick}>
            {children}
        </tr>
    )
}
