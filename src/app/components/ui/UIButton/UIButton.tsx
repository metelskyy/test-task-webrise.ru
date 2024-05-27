import clsx from 'clsx';
import Link from 'next/link';
import { AllHTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import { Typography } from '../Typography/Typography';

type ButtonVariant = 'outlined-primary' | 'outlined-white';

type Props = AllHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children?: ReactNode | string | number;
  variant?: ButtonVariant;
  fullwidth?: boolean;
};
const UIButton = ({ href, children, className, variant = 'outlined-white', fullwidth }: Props) => {
  const mergedClasName = clsx(styles[variant], fullwidth ? '.fullwidth' : '', className);

  return href ? (
    <Link href={href} className={mergedClasName}>
      <Typography variant="body-2" color="inherit">
        {children}
      </Typography>
    </Link>
  ) : (
    <button className={mergedClasName}>
      <Typography variant="body-2" color="inherit">
        {children}
      </Typography>
    </button>
  );
};
export default UIButton;
