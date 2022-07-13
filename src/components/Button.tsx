import React from 'react';
import { clsx } from 'clsx';

type Variant = 'primary' | 'secondary';

type VariantStyle = {
  [key in Variant]: string;
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

function Button(props: Props) {
  const {
    children,
    className,
    variant = 'primary',
    fullWidth = false,
    type = 'button',
    ...restProps
  } = props;

  const variantClassName: VariantStyle = {
    primary: 'bg-foreground-primary text-white',
    secondary: 'border text-foreground-primary',
  };

  const baseClassName = 'py-3 px-8 font-bold text-xs sm:text-base';
  const classNameCompose = clsx(baseClassName, variantClassName[variant], { 'w-full': fullWidth });

  return (
    <button type={type} className={classNameCompose} {...restProps}>
      {children}
    </button>
  );
}

export { Button };
