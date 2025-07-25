import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  as?: 'button' | 'a';
  href?: string;
  children: ReactNode;
  variant?: 'sunset' | 'peach' | 'outline';
  size?: 'md' | 'lg';
  target?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  as = 'button',
  href,
  children,
  variant = 'sunset',
  size = 'md',
  className,
  target,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  const variants = {
    sunset: 'bg-sunset-orange text-sunset-brown hover:bg-sunset-peach hover:text-sunset-brown',
    peach: 'bg-sunset-peach text-sunset-brown hover:bg-sunset-orange',
    outline: 'border border-sunset-peach text-sunset-peach bg-transparent hover:bg-sunset-peach/10',
  };
  const sizes = {
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  const classes = clsx(base, variants[variant], sizes[size], className);

  if (as === 'a' && href) {
    return (
      <Link href={href} target={target} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
