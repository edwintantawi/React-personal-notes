import React from 'react';
import { clsx } from 'clsx';
import { LinkProps, NavLink } from 'react-router-dom';

interface Props extends React.PropsWithChildren, LinkProps {
  fullWidth?: boolean;
}

function TabBar(props: Props) {
  const { children, to, fullWidth } = props;

  const baseClassName = 'flex justify-center p-3 font-bold';
  const activeClassName = 'bg-primary border-b-2 border-foreground-primary';

  return (
    <li className={clsx({ 'flex-1': fullWidth })}>
      <NavLink
        to={to}
        className={({ isActive }) => clsx(baseClassName, { [activeClassName]: isActive })}
      >
        {children}
      </NavLink>
    </li>
  );
}

export { TabBar };
