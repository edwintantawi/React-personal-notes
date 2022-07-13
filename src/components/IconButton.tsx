import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function IconButton(props: Props) {
  const { children, onClick } = props;
  const className = '[&>*]:w-5 [&>*]:h-5 p-2 sm:p-3 rounded-md hover:bg-primary duration-300';

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export { IconButton };
