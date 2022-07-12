import React from 'react';
import { clsx } from 'clsx';

type Variant = 'heading' | 'sub-heading' | 'body' | 'caption';
type Component = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

type VariantStyle = {
  [key in Variant]: string;
};

type FontWeightStyle = {
  [key in FontWeight]: string;
};

interface Props extends React.PropsWithChildren {
  variant?: Variant;
  component?: Component;
  className?: string;
  fontWeight?: FontWeight;
}

function Typography(props: Props) {
  const {
    variant = 'body',
    component = 'p',
    className = '',
    children = '',
    fontWeight = 'medium',
  } = props;

  const variantStyle: VariantStyle = {
    body: 'text-base',
    caption: 'text-sm',
    'sub-heading': 'text-lg',
    heading: 'text-2xl',
  };

  const fontWeightStyle: FontWeightStyle = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const classNameCompose = clsx(
    className,
    variantStyle[variant],
    fontWeightStyle[fontWeight],
    'text-foreground',
  );

  return React.createElement(
    component,
    { className: classNameCompose },
    children,
  );
}

export { Typography };
