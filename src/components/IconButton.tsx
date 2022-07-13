import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

function IconButton(props: Props) {
  const { children, onClick, label } = props;
  const className = '[&>*]:w-5 [&>*]:h-5 p-2 sm:p-3 rounded-md hover:bg-primary duration-300';

  return (
    <button className={className} type="button" onClick={onClick} aria-label={label} title={label}>
      {children}
    </button>
  );
}

export { IconButton };
