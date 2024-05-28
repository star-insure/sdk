import React from 'react';
import { Link } from '@inertiajs/react';

interface Props {
  className?: string;
  href?: string;
  target?: '_blank' | '_self';
  onClick?: Function;
  type?: 'button' | 'submit';
  status?: 'primary' | 'danger' | 'warning' | 'info' | 'default';
  children: React.ReactNode;
  disabled?: boolean;
  as?: 'link' | 'button' | 'a';
  small?: boolean;
}

export default function Button({
  className,
  href,
  target,
  onClick,
  type,
  children,
  status = 'default',
  disabled = false,
  as,
  small = false,
}: Props) {
  const baseClasses = small
    ? 'font-bold text-sm inline-flex items-center gap-3 justify-center text-white text-center px-3 py-1 rounded min-w-[80px] transition-all hover:brightness-110'
    : 'font-black inline-flex items-center gap-3 justify-center text-white text-center px-5 py-2 rounded-md min-w-[120px] transition-all hover:brightness-110';

  const statusClass =
    (status === 'primary' && 'bg-teal') ||
    (status === 'danger' && 'bg-red-500') ||
    (status === 'warning' && 'bg-yellow-400') ||
    (status === 'info' && 'bg-blue-400') ||
    'bg-gray-600';

  const classes = `${className ?? ''} ${baseClasses} ${statusClass}`;

  if (onClick) {
    return (
      <button
        className={classes}
        type={type ?? 'button'}
        onClick={(e: React.MouseEvent) => onClick(e)}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  if (type) {
    return (
      <button className={classes} type={type ?? 'button'} disabled={disabled}>
        {children}
      </button>
    );
  }

  if (href) {
    if (href.includes('http') || target === '_blank' || as === 'a') {
      return (
        <a href={href} target={target ?? '_self'} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <p className="text-red-500 text-sm">[Invalid button]</p>;
}
