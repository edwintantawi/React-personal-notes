import React from 'react';
import { clsx } from 'clsx';

import { useViewPosition } from '../hooks/useViewPosition';

interface Props extends React.PropsWithChildren {
  onClick?: () => void;
  StartIcon?: React.ElementType;
}

function FloatingActionButton(props: Props) {
  const { children, StartIcon, onClick } = props;

  const { isEnd } = useViewPosition();

  const baseClassName = 'max-w-xl mx-auto h-32 grid place-items-center';
  const backdropClassName = 'bg-gradient-to-t from-white via-white/60 to-white/0';

  const classNameCompose = clsx(baseClassName, {
    [backdropClassName]: !isEnd,
  });

  return (
    <div className="fixed bottom-0 right-0 left-0">
      <div className={classNameCompose}>
        <button
          type="button"
          className="flex items-center gap-2 w-fit py-3 px-8 bg-foreground-primary text-white mb-2"
          onClick={onClick}
        >
          {StartIcon && <StartIcon className="w-4 h-4 text-white" />} {children}
        </button>
      </div>
    </div>
  );
}

export { FloatingActionButton };
