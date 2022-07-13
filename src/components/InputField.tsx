import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { Typography } from './Typography';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rows?: number;
  multiLine?: boolean;
}

function ForwardInputField(props: Props, ref: React.ForwardedRef<HTMLInputElement>) {
  const {
    className,
    label,
    type = 'text',
    maxLength,
    value,
    multiLine,
    onChange,
    ...restProps
  } = props;

  const id = React.useId();

  const baseClassName =
    'block w-full py-2 border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50';

  const handleChangeCompose = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && event.target.value.length > maxLength) return;
    if (onChange) onChange(event);
  };

  const baseProperties = {
    ...restProps,
    ref,
    id,
    type,
    maxLength,
    value,
    className: baseClassName,
    onChange: handleChangeCompose,
  };

  const valueLength = String(value).length;
  const inputElement = React.createElement(multiLine ? 'textarea' : 'input', baseProperties, null);

  return (
    <label htmlFor={id} className={clsx('space-y-2', className)}>
      {label && (
        <Typography component="span" fontWeight="semibold">
          {label}
        </Typography>
      )}
      {inputElement}
      {maxLength && (
        <Typography component="span" variant="caption" className="float-right">
          {valueLength}/{maxLength}
        </Typography>
      )}
    </label>
  );
}

const InputField = forwardRef<HTMLInputElement, Props>(ForwardInputField);

export { InputField };
