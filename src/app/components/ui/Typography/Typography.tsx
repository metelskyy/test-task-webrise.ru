import { CSSProperties, ReactNode } from 'react';
import styles from './typography.module.scss';
import clsx from 'clsx';

type TypographyVariant =
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  | 'title-6'
  | 'subtitle-1'
  | 'subtitle-2'
  | 'subtitle-3'
  | 'subtitle-4'
  | 'body-1'
  | 'body-2'
  | 'body-3';
type ComponentVariant = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Color = 'primary' | 'white' | 'inherit';

type Props = {
  variant?: TypographyVariant;
  children: ReactNode | string | number;
  component?: ComponentVariant;
  font?: 'roboto' | 'bebas';
  className?: string;
  style?: CSSProperties;
  color?: Color;
};

export const Typography = ({
  variant = 'body-1',
  children,
  component = 'span',
  font = 'roboto',
  className,
  style,
  color = 'primary',
}: Props) => {
  const mergedClassName = clsx(
    styles[variant],
    className,
    font === 'bebas' ? styles.bebas : styles.roboto,
    styles[color],
  );

  switch (component) {
    case 'h1':
      return (
        <h1 className={mergedClassName} style={style}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={mergedClassName} style={style}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={mergedClassName} style={style}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={mergedClassName} style={style}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={mergedClassName} style={style}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={mergedClassName} style={style}>
          {children}
        </h6>
      );
    case 'span':
      return (
        <span className={mergedClassName} style={style}>
          {children}
        </span>
      );
    case 'p':
      return (
        <p className={mergedClassName} style={style}>
          {children}
        </p>
      );

    default:
      return (
        <span className={mergedClassName} style={style}>
          {children}
        </span>
      );
  }
};
