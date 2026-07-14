import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import type { ButtonVariant } from './Button';

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * CTA com aparência de Button do DS, renderizado como link (interno via
 * next/link, externo via <a>). Hover via classes CSS (.btn-*) — server component.
 */
export function ButtonLink({ href, variant = 'primary', size = 'md', children, className, ...rest }: ButtonLinkProps) {
  const classes = `btn btn-${size} btn-${variant}${className ? ` ${className}` : ''}`;
  const isInternal = href.startsWith('/') || href.startsWith('#');
  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  const isMailto = href.startsWith('mailto:') || href.startsWith('tel:');
  return (
    <a
      href={href}
      className={classes}
      {...(isMailto ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {children}
    </a>
  );
}
